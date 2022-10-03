import {AuthCallout, Button, InputContainer, InputField, InputLabel} from "../../utils/styles";
import styles from './index.module.scss'
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";

export const LoginForm = () => {

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form submitted")
  };

  return <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <InputContainer>
      <InputLabel htmlFor="email">Email</InputLabel>
      <InputField type="email" id="email"
        {...register("email", {required: "Email is required"})}
      />
    </InputContainer>
    <InputContainer className={styles.nameContainer}>
      <InputLabel htmlFor="password">Password</InputLabel>
      <InputField type="password" id="password"
        {...register("password", {required: "Password is required"})}
      />
    </InputContainer>
    <Button className={styles.button}>Login</Button>
    <AuthCallout>
      <span>No account?</span>
      <Link to="/register">Create one</Link>
    </AuthCallout>
  </form>
}