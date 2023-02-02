import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    currency: "$",
  },
  extraReducers: (builder) => {
    builder.addCase(getCartDetails.fulfilled, (state, { payload }) => {
      state.items = payload.items;
      state.total = payload.total;
    });
    builder.addCase(editCart.fulfilled, (state, { payload }) => {
      state.items = payload.items;
      state.total = payload.total;
    });
  },
});

export const getCartDetails = createAsyncThunk("cart/getCartDetails", async () => {
  const data = {
    items: [
      {
        id: 1,
        img: "assets/img/products/1.png",
        title: "Kiwi",
        qty: 2,
        price: 12.99,
      },
      {
        id: 2,
        img: "assets/img/products/2.png",
        title: "Watermelons",
        qty: 1,
        price: 12.99,
      },
      {
        id: 3,
        img: "assets/img/products/3.png",
        title: "Cucumbers",
        qty: 3,
        price: 12.99,
      },
      {
        id: 4,
        img: "assets/img/products/3.png",
        title: "Cucumbers",
        qty: 3,
        price: 12.99,
      },
    ],
    total: 99,
    currency: "$",
  };
  return data;
});

export const editCart = createAsyncThunk("cart/editCart", async () => {
  // fetch api to edit the cart details
  // the return of the api will be the new cart details
  // return the cart details that came from the database
});

export const cartActions = cartSlice.actions;
export default cartSlice;
