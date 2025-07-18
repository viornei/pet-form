import RegisterForm from "./registerForm/RegisterForm";
import styles from "./AuthBlock.module.css";
const AuthBlock = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};
export default AuthBlock;
