import Link from "next/link";
import SignUpForm from "src/components/SignUpForm";
import styles from "../styles/pages/sign.module.scss";
const style = {
  backgroundColor: "#0e101c",
  height: 1200,
};
const SignUpPage: React.FC = () => {
  return (
    <div style={style}>
      <div>
        <h2>Sign up</h2>
        <p>
          already have an account?{" "}
          <Link href="/login">
            <a href="#" className="text-blue-500">
              Log in
            </a>
          </Link>
        </p>
        <div className={styles.form}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
