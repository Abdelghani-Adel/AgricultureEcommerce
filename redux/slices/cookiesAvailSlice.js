import { createSlice } from "@reduxjs/toolkit";

const cookiesAvailSlice = createSlice({
  name: "cookies",
  initialState: null,
  reducers: {
    changeAvailability: (state, params) => {
      return params.payload;
    },
  },
});

export const cookiesActions = cookiesAvailSlice.actions;
export default cookiesAvailSlice;
