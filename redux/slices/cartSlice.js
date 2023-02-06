import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuthHeaders } from "../../helper/auth";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    currency: "$",
  },
  extraReducers: (builder) => {
    builder.addCase(getCartDetails.fulfilled, (state, { payload }) => {
      console.log("state ", payload);
      state.items = payload.items;
      state.total = payload.total;
    });
    builder.addCase(editCart.fulfilled, (state, { payload }) => {
      state.items = payload.items;
      state.total = payload.totalPrice;
    });
  },
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      state.location = [...state.location, payload];
    },
  },
});

export const getCartDetails = createAsyncThunk("cart/getCartDetails", async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/getCartItem`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ lang: "AR" }),
  });

  const cartData = await res.json();
  console.log(cartData);

  return cartData;
});

export const editCart = createAsyncThunk("cart/editCart", async (item) => {
  // fetch api to edit the cart details
  // the return of the api will be the new cart details
  // return the cart details that came from the database
});

export const cartActions = cartSlice.actions;
export default cartSlice;
