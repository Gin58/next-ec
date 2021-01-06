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
    signInAction: (state, action: PayloadAction<{ uid: string; username: string }>) => {
      return {
        ...state,
        ...action.payload,
        isSignedIn: true,
      };
    },
    signOutAction: (state, action: PayloadAction<userState>) => {
      initialState;
    },
  },
});

export const { signInAction, signOutAction } = usersSlice.actions;
