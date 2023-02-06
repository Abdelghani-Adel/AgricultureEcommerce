import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getAuthHeaders } from "../../helper/auth";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    currency: "$",
    cart_id: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getCartDetails.fulfilled, (state, { payload }) => {
      if (payload) {
        state.items = payload.items;
        state.total = payload.totalPrice;
        state.cart_id = payload.Cart_Id;
      }
    });
    builder.addCase(editCart.fulfilled, (state, { payload }) => {
      if (payload) {
        state.items = payload.items;
        state.total = payload.totalPrice;
        state.cart_id = payload.Cart_Id;
      }
    });
    builder.addCase(deleteItem.fulfilled, (state, { payload }) => {
      if (payload) {
        state.items = payload.items;
        state.total = payload.totalPrice;
        state.cart_id = payload.Cart_Id;
      }
      if (!payload) {
        state.items = [];
        state.total = 0;
      }
    });
  },
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      state.location = [...state.location, payload];
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.cart_id = 0;
    },
  },
});

export const getCartDetails = createAsyncThunk("cart/getCartDetails", async (payload, thunkAPI) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/getCartItem`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ lang: "AR" }),
  });

  const cartData = await res.json();
  return cartData;
});

export const editCart = createAsyncThunk("cart/editCart", async (payload, thunkAPI) => {
  console.log(payload);
  const currentState = thunkAPI.getState().cart;
  console.log(currentState.items);

  const items = currentState.items.filter((item) => item.Item_Id == payload.item.Item_Id);
  console.log(items);

  const item = items[0] || {};

  console.log(item);
  let quoteSID = item.Quote_S_Id || 0;

  if (payload.action == "minus" && item.Qty == "1") {
    thunkAPI.dispatch(deleteItem(item));
  }

  let quantity = 1;
  if (payload.action == "plus" && item.Qty) {
    quantity = item.Qty + 1;
  }
  if (payload.action == "minus" && item.Qty) {
    quantity = item.Qty - 1;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/addToCart`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({
      success: true,
      Message: "string",
      totalPrice: 0,
      Cart_Ref: "string",
      Cust_Id: 30,
      Cart_Id: currentState.cart_id,
      lang: "AR",
      items: [
        {
          Quote_S_Id: quoteSID,
          Item_Id: payload.item.Item_Id,
          Item_Name: "test",
          Qty: quantity,
          UnitPrice: 5,
          Quote_Date: "string",
          UOM_Id: 2,
          UOM_Name: "string",
          Cart_Id: currentState.cart_id,
          Supp_Id: 1,
          lang: "AR",
        },
      ],
    }),
  });

  const cartDetails = await res.json();

  return cartDetails;
});

export const deleteItem = createAsyncThunk("cart/deleteItem", async (payload, thunkAPI) => {
  const currentState = thunkAPI.getState().cart;
  const item = currentState.items.filter((item) => item.Item_Id == payload.Item_Id)[0];
  console.log(item);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/deleteFromCart`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ ...item, Cart_Id: currentState.cart_id }),
  });

  const cartDetails = await res.json();
  console.log(cartDetails);
  return cartDetails;
});

export const cartActions = cartSlice.actions;
export default cartSlice;
