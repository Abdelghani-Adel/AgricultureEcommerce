import { fetchPagesTemplate } from "../../services/PagesTemplate";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const pagesTemplateSlice = createSlice({
  name: "template",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchTemplate.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const fetchTemplate = createAsyncThunk("template/fetchTemplate", async () => {
  const template = await fetchPagesTemplate();
  return template;
});

export default pagesTemplateSlice;
