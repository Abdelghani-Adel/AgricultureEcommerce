import { createSlice } from "@reduxjs/toolkit";

const subCategoryNavSlice = createSlice({
  name: "subNav",
  initialState: [],
  reducers: {
    hydrate: (state, params) => {
      return params.payload;
    },
    clear: () => {
      return [];
    },
  },
});

export const subNavActions = subCategoryNavSlice.actions;

export default subCategoryNavSlice;
