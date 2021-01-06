import { useSelector } from "react-redux";
import { Layout } from "src/components/layout";

import { getUserId, getUsername } from "../reducks/users/selector";

const Home = () => {
  const uid = useSelector(getUserId);
  const username = useSelector(getUsername);

  console.log(uid);
  return (
    <Layout>
      <div>ユーザーid: {uid}</div>
      <div>ユーザーネーム: {username}</div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
