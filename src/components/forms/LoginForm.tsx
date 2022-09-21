import {Button, InputContainer, InputField, InputLabel} from "../../utils/styles";
import styles from './index.module.scss'
import {FormEvent} from "react";

export const LoginForm = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return <form className={styles.form} onSubmit={onSubmit}>
    <InputContainer>
      <InputLabel htmlFor="email">Email</InputLabel>
      <InputField type="email" id="email"/>
    </InputContainer>
    <InputContainer className={styles.nameContainer}>
      <InputLabel htmlFor="password">Password</InputLabel>
      <InputField type="password" id="password"/>
    </InputContainer>
    <Button className={styles.button}>Login</Button>
  </form>
}