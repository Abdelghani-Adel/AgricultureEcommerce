import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    changeAuthState: (state, params) => {
      return { isAuthenticated: params.payload };
    },
  },
});

export const authStateActions = authSlice.actions;
export default authSlice;
