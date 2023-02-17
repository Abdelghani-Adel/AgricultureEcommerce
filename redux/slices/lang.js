import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: "ar",
  reducers: {
    changeLang: (state, params) => {
      return params.payload;
    },
  },
});

export const langActions = langSlice.actions;
export default langSlice;
