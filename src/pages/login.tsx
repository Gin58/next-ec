import Link from "next/link";
import LoginForm from "src/components/LoginForm";
import styles from "../styles/pages/sign.module.scss";
const style = {
  backgroundColor: "#0e101c",
  height: 1200,
};
const LoginPage: React.FC = () => {
  return (
    <div style={style}>
      <div>
        <h2>Log in</h2>
        <p>
          {"Don't have an account? "}
          <Link href="/signup">
            <a href="#">Sign Up</a>
          </Link>
        </p>
        <div className={styles.form}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
