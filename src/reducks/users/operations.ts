import { Dispatch } from "redux";
import { initialState } from "src/reducks/store/types";
import { auth, db, FirebaseTimestamp } from "src/utils/Firebase";
import { signInAction } from "./usersSlice";

export const signIn = () => {
  return async (dispatch: Dispatch, getState: () => initialState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/gin58";

      const res = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);

      const username = res.login;

      dispatch(
        signInAction({
          uid: "00001",
          username,
        })
      );
    }
  };
};

export const signUp = (username: string, email: string, password: string, confirmPassword: string) => {
  return async () => {
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
      alert("必須項目が未入力です");
      return false;
    }

    if (password !== confirmPassword) {
      alert("パスワードが一致しません。もう一度お試しください");
      return false;
    }

    return auth.createUserWithEmailAndPassword(email, password).then((result) => {
      const { user } = result;
      if (user) {
        const { uid } = user;
        const timestamp = FirebaseTimestamp.now();

        const userInitialData = {
          created_at: timestamp,
          email,
          role: "customer",
          updated_at: timestamp,
          username,
        };

        db.collection("users").doc(uid).set(userInitialData);
      }
    });
  };
};
