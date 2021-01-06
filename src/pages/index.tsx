import { useDispatch, useSelector } from "react-redux";
import { Layout } from "src/components/layout";
import { signIn } from "src/reducks/users/usersSlice";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);

  console.log(selector)
  return (
    <Layout>
      <button
        className="btn-blue"
        onClick={() => {
          window.alert("Hello, World!");
        }}
      >
        Button
      </button>
      <button onClick={() => dispatch(signIn({ uid: '0001', username: 'test'}))}>
        Sign in
      </button>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
