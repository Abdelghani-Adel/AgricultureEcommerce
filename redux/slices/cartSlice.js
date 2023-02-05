import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import {AuthHeaders , handleError} from "../../helper/apiHelper";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    currency: "$",
  },
  extraReducers: (builder) => {
    builder.addCase(getCartDetails.fulfilled, (state, { payload }) => {
      console.log("state " ,payload);
      state.items = payload.items;
       state.total = payload.total;
    });
    builder.addCase(editCart.fulfilled, (state, { payload }) => {
      state.items = payload.items;
       state.total = payload.total;
    });
  },
  reducers: {
    save: (state, param) => {
        const { payload } = param;
        state.location = [...state.location, payload];
    },
}
});

export const getCartDetails = createAsyncThunk("cart/getCartDetails", async () => {
  const Req ={
    "lang": "AR"
  }
 const res =  await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/getCartItem`, {
  method: "POST",
  headers: AuthHeaders(),
  body: JSON.stringify(Req),
})
  
    .then((resp) => {
      var result =  resp.json();
      console.log("result cart " ,result);
      return result;
    })
    .catch(function (error) {
      console.log("result cart error" ,error);
      handleError(error, dispatch);
    });

  const data = {
    items: res.items,
    total: res.totalPrice,
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
export const cartReducers = cartSlice.reducer;
export default cartSlice;
