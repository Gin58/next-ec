// import { User } from 'firebase';
// FIXME:
// 参考: https://qiita.com/y-shida1997/items/f5e52c7288813a8184ff
// https://zenn.dev/k_logic24/articles/react-auth-with-firebase

type User = {};
import { FC, createContext, useEffect, useState } from "react";

import firebase from "../utils/Firebase";

type AuthContextProps = {
  currentUser: User | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return <AuthContext.Provider value={{ currentUser: currentUser }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
