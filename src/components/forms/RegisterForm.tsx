import {Button, InputContainer, InputField, InputLabel} from "../../utils/styles";
import styles from './index.module.scss'

export const RegisterForm = () => {
  return <form className={styles.form}>
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
    <Button className={styles.button}>Create account </Button>
  </form>
}