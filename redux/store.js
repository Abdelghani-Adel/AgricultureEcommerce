import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import loaderSlice from "./slices/loaderSlice";

const store = configureStore(
  {
    reducer: {
      cart: cartSlice.reducer,
      auth: authSlice.reducer,
      loader: loaderSlice.reducer,
    },
  },
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
