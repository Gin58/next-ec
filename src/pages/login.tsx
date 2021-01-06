import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Layout } from "src/components/layout";
import { signIn } from "src/reducks/users/usersSlice";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Layout>
      <div>
        <button
          className="btn-blue"
          onClick={() => {
            dispatch(signIn({ uid: "0001", username: "test" }));
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
