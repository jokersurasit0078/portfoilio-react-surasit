import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, IUserState } from "./user.model";

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userCleard: (state: IUserState) => {
      state.username = "";
    },
    setUser: (state: IUserState, response: PayloadAction<any>) => {
      state.username = "";
    },
  },
});

export const { userCleard, setUser } = slice.actions;

export default slice.reducer;
