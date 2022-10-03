import {AuthCallout, Button, InputContainer, InputField, InputLabel} from "../../utils/styles";
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

export const RegisterForm = () => {

  const {
    register,
    handleSubmit
  } = useForm();

  // Email validation, more: https://www.ietf.org/rfc/rfc5322.txt
  // need to check special characters:
  // eslint-disable-next-line no-control-regex
  const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/i

  const onSubmit = (data: any) => {
    console.log("Form submitted", data)
  };
  return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <InputContainer>
      <InputLabel htmlFor="email">Email</InputLabel>
      <InputField type="email" id="email"
        {...register("email", {
        required: "Email adress is required",
        pattern: {
          value: emailRegex,
          message: "Invalid format of email adress"
        }})}
      />
    </InputContainer>

    <section className={styles.nameFieldRow}>
      <InputContainer>
        <InputLabel htmlFor="firstName">First name</InputLabel>
        <InputField type="text" id="firstName"
          {...register("firstName", {required: "First name is required"})}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="lastName">Last name</InputLabel>
        <InputField type="name" id="lastName"
          {...register("lastName", {required: "Last name is required"})}
        />
      </InputContainer>
    </section>
    <InputContainer className={styles.nameContainer}>
      <InputLabel htmlFor="password">Password</InputLabel>
      <InputField type="password" id="password"
        {...register("password", {required: "Password is required"})}
      />
    </InputContainer>
    <Button>Create account </Button>
    <AuthCallout>
      <span>Already have an account?</span>
      <Link to="/login">Login</Link>
    </AuthCallout>
  </form>
}