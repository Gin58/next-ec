import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Layout } from "src/components/layout";
import { signIn } from "../reducks/users/operations";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Layout>
      <div>
        <button
          className="btn-blue"
          onClick={() => {
            dispatch(signIn());
            router.push("/");
          }}
        >
          ログインする
        </button>
      </div>
    </Layout>
  );
};

export default Login;
