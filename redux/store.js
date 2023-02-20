import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import langSlice from "./slices/lang";
import loaderSlice from "./slices/loaderSlice";
import navBarSlice from "./slices/navbarSlice";
import productSlice from "./slices/productSlice";

const store = configureStore(
  {
    reducer: {
      cart: cartSlice.reducer,
      auth: authSlice.reducer,
      loader: loaderSlice.reducer,
      navbarLinks: navBarSlice.reducer,
      lang: langSlice.reducer,
      products: productSlice.reducer,
    },
  },
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
