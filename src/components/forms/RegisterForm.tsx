import {AuthCallout, Button, InputContainer, InputField, InputLabel} from "../../utils/styles";
import styles from './index.module.scss'
import {FormEvent} from "react";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return <form className={styles.form} onSubmit={onSubmit}>
    <InputContainer>
      <InputLabel htmlFor="email">Email</InputLabel>
      <InputField type="email" id="email"/>
    </InputContainer>
    <section className={styles.nameFieldRow}>
      <InputContainer>
        <InputLabel htmlFor="firstName">First name</InputLabel>
        <InputField type="text" id="firstName"/>
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="lastName">Last name</InputLabel>
        <InputField type="name" id="lastName"/>
      </InputContainer>
    </section>
    <InputContainer className={styles.nameContainer}>
      <InputLabel htmlFor="password">Password</InputLabel>
      <InputField type="password" id="password"/>
    </InputContainer>
    <Button>Create account </Button>
    <AuthCallout>
      <span>Already have an account?</span>
      <Link to="/login">Login</Link>
    </AuthCallout>
  </form>
}