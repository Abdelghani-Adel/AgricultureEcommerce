import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBestProducts, fetchBooksItems } from "../../services/productServices";

const productSlice = createSlice({
  name: "products",
  initialState: {
    bestProducts: [],
    books: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (payload, thunkAPI) => {
    const lang = thunkAPI.getState().lang;
    const bestProducts = await fetchBestProducts(lang);
    const books = await fetchBooksItems(lang);
    return {
      bestProducts: bestProducts,
      books: books,
    };
  }
);

export default productSlice;
