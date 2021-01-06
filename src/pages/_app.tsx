import "src/styles/globals.css";

import { Provider } from "react-redux";
import store from "../reducks/store/store";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = (props: AppProps) => {
  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      <Provider store={store}>
        <props.Component {...props.pageProps} />
      </Provider>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
