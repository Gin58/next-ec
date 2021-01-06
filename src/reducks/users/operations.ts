import { Dispatch } from "redux";
import { initialState } from "src/reducks/store/types";
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
