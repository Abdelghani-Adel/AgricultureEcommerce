import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesMenu } from "../../services/categoryServices";

const navBarSlice = createSlice({
  name: "navbar",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getNavbarLinks.fulfilled, (state, { payload }) => {
      return [...state, ...payload];
    });
  },
});

export const getNavbarLinks = createAsyncThunk(
  "navbar/getNavbarLinks",
  async (payload, thunkAPI) => {
    const lang = thunkAPI.getState().lang;
    const links = await fetchCategoriesMenu(lang);
    return links;
  }
);

export const navbarActions = navBarSlice.actions;
export default navBarSlice;
