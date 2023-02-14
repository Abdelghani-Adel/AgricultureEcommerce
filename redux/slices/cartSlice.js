import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSession } from "next-auth/react";
import { getAuthHeaders } from "../../helper/auth";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    Cart_Id: 0,
    checkedCartItems: [],
    checkedCartItemsTotalPrice: 0,
    // tempCheckoutCart: {
    //   items: [],
    // },
  },
  reducers: {
    checkCartItem: (state, params) => {
      const itemPrice = params.payload.Qty * params.payload.UnitPrice;
      const checkedItemsPrice = state.checkedCartItemsTotalPrice + itemPrice;
      return {
        ...state,
        checkedCartItems: [...state.checkedCartItems, params.payload],
        checkedCartItemsTotalPrice: checkedItemsPrice,
      };
    },
    unCheckCartItem: (state, params) => {
      const itemPrice = params.payload.Qty * params.payload.UnitPrice;
      const checkedItemsPrice = state.checkedCartItemsTotalPrice - itemPrice;

      const filteredCheckedItems = state.checkedCartItems.filter(
        (item) => item.Item_Id != params.payload.Item_Id
      );

      return {
        ...state,
        checkedCartItems: [...filteredCheckedItems],
        checkedCartItemsTotalPrice: checkedItemsPrice,
      };
    },
    save: (state, param) => {
      const { payload } = param;
      state.location = [...state.location, payload];
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.Cart_Id = 0;
    },
    hydrateTempCart: (state, params) => {
      const item = {
        Quote_S_Id: 0,
        Item_Id: 0,
        Item_Name: params.payload.Item_Name,
        Qty: 1,
        UnitPrice: params.payload.UnitPrice || 0,
        Quote_Date: "string",
        UOM_Id: 0,
        UOM_Name: "string",
        Cart_Id: 0,
        Supp_Id: 0,
        lang: "string",
      };
      return { ...state, tempCheckoutCart: { totalPrice: 0, items: [item] } };
    },
    deleteTempCart: (state) => {
      return { ...state, tempCheckoutCart: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartDetails.fulfilled, (state, { payload }) => {
      if (payload) {
        return { ...state, ...payload };
      }
    });
    builder.addCase(editCart.fulfilled, (state, { payload }) => {
      if (payload) {
        state.items = payload.items;
        state.totalPrice = payload.totalPrice;
        state.Cart_Id = payload.Cart_Id;
      }
    });
    builder.addCase(deleteItem.fulfilled, (state, { payload }) => {
      if (payload) {
        state.items = payload.items;
        state.totalPrice = payload.totalPrice;
        state.Cart_Id = payload.Cart_Id;
      }
      if (!payload) {
        state.items = [];
        state.total = 0;
      }
    });
    // builder.addCase(hydrateTempCart.fulfilled, (state, { payload }) => {
    //   return { ...state, tempCheckoutCart: { items: [params.payload] } };
    // });
  },
});

export const getCartDetails = createAsyncThunk("cart/getCartDetails", async (payload, thunkAPI) => {
  const session = await getSession();
  if (session) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/getCartItem`, {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify({ lang: "AR" }),
    });

    const cartData = await res.json();
    return cartData;
  }
});

export const editCart = createAsyncThunk("cart/editCart", async (payload, thunkAPI) => {
  const currentState = thunkAPI.getState().cart;
  const items = currentState.items.filter((item) => item.Item_Id == payload.item.Item_Id);
  const item = items[0] || {};
  let quoteSID = item.Quote_S_Id || 0;
  let quantity = 1;

  if (payload.action == "minus" && item.Qty == "1") {
    thunkAPI.dispatch(deleteItem(item));
  }

  if (payload.action == "plus" && item.Qty) {
    quantity = item.Qty + 1;
  }
  if (payload.action == "minus" && item.Qty) {
    quantity = item.Qty - 1;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/addToCart`, {
    method: "POST",
    headers: await getAuthHeaders(),
    body: JSON.stringify({
      success: true,
      Message: "string",
      totalPrice: 0,
      Cart_Ref: "string",
      Cust_Id: 30,
      Cart_Id: currentState.Cart_Id,
      lang: "AR",
      items: [
        {
          Quote_S_Id: quoteSID,
          Item_Id: payload.item.Item_Id,
          Item_Name: "",
          Qty: quantity,
          UnitPrice: 5,
          Quote_Date: "",
          UOM_Id: payload.item.UOM_Id,
          UOM_Name: "",
          Cart_Id: currentState.Cart_Id,
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

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/deleteFromCart`, {
    method: "POST",
    headers: await getAuthHeaders(),
    body: JSON.stringify({ ...item, Cart_Id: currentState.Cart_Id }),
  });

  const cartDetails = await res.json();

  return cartDetails;
});

export const cartActions = cartSlice.actions;
export default cartSlice;
