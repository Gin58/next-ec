import { useForm } from "react-hook-form";
import { signUp } from "src/reducks/users/operations";
import styles from "../styles/pages/signuup.module.scss";
interface SignUpData {
  username: string;
  email: string;
  password: string;
  confirmPasword: string;
}

const SignUpForm: React.FC = () => {
  const { register, errors, handleSubmit, watch } = useForm();

  const onSubmit = (data: SignUpData) => {
    signUp(data.username, data.email, data.password, data.confirmPasword);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form}>
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text"
          name="name"
          ref={register({
            required: "Please enter an name",
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>
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
        <div className="mt-1 rounded-md shadow-sm">
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
      <div className={styles.form}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            id="confirmPassword"
            type="Password"
            name="confirmPassword"
            ref={register({
              required: "Please enter a confirmPassword",
              validate: (value) => value === watch("password") || "The passwords do not match",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
      </div>
      <div className={styles.buttonForm}>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
