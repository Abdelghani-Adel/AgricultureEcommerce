import { createSlice, current } from "@reduxjs/toolkit";

const findItem = (state, product) => {
  let index = null;
  let foundProduct = null;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    currency: "$",
  },

  reducers: {
    getCartDetailsFromAPI(state, action) {
      return { ...action.payload };
    },
    editItem(state, action) {},
    removeItem(state, action) {},
    addItem(state, action) {},
  },
});

export const getCartDetails = () => {
  return async (dispatch) => {
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
      ],
      total: 50,
      currency: "$",
    };
    dispatch(cartActions.getCartDetailsFromAPI(data));
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
