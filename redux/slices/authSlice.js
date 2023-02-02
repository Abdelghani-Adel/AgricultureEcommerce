import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAuthToken from "../../helper/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuthentication.fulfilled, (state, { payload }) => {
      state.isAuthenticated = payload;
    });
  },
});

export const checkAuthentication = createAsyncThunk("auth/checkAuthentication", async () => {
  const authToken = getAuthToken();

  // Call api to check the validity of the token

  if (authToken) {
    return true;
  }
  return false;
});
export default authSlice;
