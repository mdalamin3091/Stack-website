import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthResponse } from "../../../types";

const token = localStorage.getItem("token");

const initialState: IAuthResponse = {
  user: null,
  id: null,
  token: token ? token : "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuthResponse>) => {
      const { token, id } = action.payload;
      state.user = action.payload;
      state.token = token;
      state.id = id;
    },
    logOut: (state) => {
      state.token = "";
      state.id = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

// selector
export const selectToken = (state: { auth: { token: string } }) =>
  state.auth.token;
