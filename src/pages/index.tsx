import { useSelector } from "react-redux";
import { Layout } from "src/components/layout";

import { getUserId } from "../reducks/users/selector";

const Home = () => {
  const uid = useSelector(getUserId);

  console.log(uid);
  return (
    <Layout>
      <div>{uid}</div>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
