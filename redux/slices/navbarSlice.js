import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuthToken } from "../../helper/auth";

const navBarSlice = createSlice({
  name: "navbar",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(getNavbarLinks.fulfilled, (state, { payload }) => {
      return [...payload];
    });
  },
});

export const getNavbarLinks = createAsyncThunk("navbar/getNavbarLinks", async () => {
  console.log("ddd");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetCategoriesMenu`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: await getAuthToken(),
      },
      body: JSON.stringify({
        lang: "ar",
        FAClassification_ParentId: 81,
      }),
    }
  );
  const links = await res.json();
  console.log(links);
  return links;
});

export const navbarActions = navBarSlice.actions;
export default navBarSlice;
