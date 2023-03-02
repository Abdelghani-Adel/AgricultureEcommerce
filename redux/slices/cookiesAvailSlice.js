import { createSlice } from "@reduxjs/toolkit";

const cookiesState = createSlice({
  name: "cookies",
  initialState: null,
  reducers: {
    changeAvailability: (state, params) => {
      return params.payload;
    },
  },
});

export const cookiesActions = cookiesState.actions;
export default cookiesState;
