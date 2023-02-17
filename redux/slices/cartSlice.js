import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSession } from "next-auth/react";
import { getCartDetailsFromCookies } from "../../helper/cookiesHandlers";
import {
  deleteCartItem,
  editCartItem,
  fetchCartDetailsFromDB,
  fetchCurrency,
} from "../../services/cartServices";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    Cart_Id: 0,
    checkedCartItems: [],
    checkedCartItemsTotalPrice: 0,
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
    builder.addCase(getCurrency.fulfilled, (state, { payload }) => {
      if (payload) {
        return { ...state, currency: payload };
      }
    });
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
      console.log(payload);
      if (payload) {
        state.items = payload.items;
        state.totalPrice = payload.totalPrice;
        state.Cart_Id = payload.Cart_Id;
      }
    });
  },
});

export const getCurrency = createAsyncThunk("cart/getCurrency", async () => {
  return fetchCurrency();
});

export const getCartDetails = createAsyncThunk("cart/getCartDetails", async (payload, thunkAPI) => {
  const session = await getSession();
  const lang = thunkAPI.getState().lang;

  if (session) {
    return fetchCartDetailsFromDB(lang);
  }

  if (!session) {
    return getCartDetailsFromCookies(payload);
  }
});

export const editCart = createAsyncThunk("cart/editCart", async (payload, thunkAPI) => {
  const lang = thunkAPI.getState().lang;
  const session = await getSession();
  const Cust_Id = session.user.custId;
  const currentState = thunkAPI.getState().cart;
  const Cart_Id = currentState.Cart_Id;
  const filteredItems = currentState.items.filter((item) => item.Item_Id == payload.item.Item_Id);
  const cartItemBeingEdited = filteredItems[0] || {};
  const Quote_S_Id = cartItemBeingEdited.Quote_S_Id || 0;
  let Qty = payload.item.Qty;

  if (payload.action == "minus" && cartItemBeingEdited.Qty == "1") {
    thunkAPI.dispatch(deleteItem(cartItemBeingEdited));
  }

  if (payload.action == "plus" && cartItemBeingEdited.Qty) {
    Qty = cartItemBeingEdited.Qty + 1;
  }
  if (payload.action == "minus" && cartItemBeingEdited.Qty) {
    Qty = cartItemBeingEdited.Qty - 1;
  }

  const editedCartItem = {
    Qty: Qty,
    Cart_Id: Cart_Id,
    Quote_S_Id: Quote_S_Id,
    Quote_Date: payload.item.Quote_Date,
    UnitPrice: payload.item.UnitPrice,
    Item_Name: payload.item.Item_Name,
    UOM_Name: payload.item.UOM_Name,
    Item_Id: payload.item.Item_Id,
    Supp_Id: payload.item.Supp_Id,
    UOM_Id: payload.item.UOM_Id,
    lang: payload.item.lang,
  };

  return editCartItem(editedCartItem, Cart_Id, lang, Cust_Id);
});

export const deleteItem = createAsyncThunk("cart/deleteItem", async (payload, thunkAPI) => {
  const lang = thunkAPI.getState().lang;
  const currentState = thunkAPI.getState().cart;
  const Cart_Id = currentState.Cart_Id;
  const item = currentState.items.filter((item) => item.Item_Id == payload.Item_Id)[0];
  return deleteCartItem(item, Cart_Id, lang);
});

export const cartActions = cartSlice.actions;
export default cartSlice;
