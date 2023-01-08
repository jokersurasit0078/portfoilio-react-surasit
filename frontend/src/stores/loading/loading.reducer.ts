import { createSlice } from "@reduxjs/toolkit";
import { initialState, ILoadingState } from "./loading.model";

export const slice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state: ILoadingState) => {
      state.isLoading = true;
    },
    stopLoading: (state: ILoadingState) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading , stopLoading } =
  slice.actions;

export default slice.reducer;
