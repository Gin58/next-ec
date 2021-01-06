import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "src/reducks/store/types";
import { userState } from "src/reducks/users/types";

export const getUserId = createSelector(
  (state: initialState) => state.users,
  (users: userState) => users.uid
);

export const getUsername = createSelector(
  (state: initialState) => state.users,
  (users: userState) => users.username
);
