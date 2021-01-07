import { useForm } from "react-hook-form";
import styles from "../styles/pages/signuup.module.scss";
interface LoginData {
  email: string;
  password: string;
}
const LoginForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data: LoginData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <label htmlFor="email">Email address</label>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            ref={register({
              required: "Please enter an email",
              pattern: {
                value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                message: "Not a valid email",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
      </div>
      <div className={styles.form}>
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            ref={register({
              required: "Please enter a password",
              minLength: {
                value: 6,
                message: "Should have at least 6 characters",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
      </div>
      <div className={styles.buttonForm}>
        <button type="submit">Log in</button>
      </div>
    </form>
  );
};
export default LoginForm;
