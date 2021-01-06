import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState } from "../users/types";

const initialState: userState = {
  isSignedIn: false,
  uid: "",
  username: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<{ uid: string; username: string }>) => {
      return {
        ...state,
        ...action.payload,
        isSignedIn: true,
      };
    },
    signOut: (state, action: PayloadAction<userState>) => {
      initialState;
    },
  },
});

export const { signIn, signOut } = usersSlice.actions;
