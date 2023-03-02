import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import cookiesState from "./slices/cookiesAvailSlice";
import langSlice from "./slices/lang";
import loaderSlice from "./slices/loaderSlice";
import navBarSlice from "./slices/navbarSlice";
import pagesTemplateSlice from "./slices/PagesTemplateSlice";
import productSlice from "./slices/productSlice";
import subCategoryNavSlice from "./slices/subCategoryNavSlice";

const store = configureStore(
  {
    reducer: {
      cart: cartSlice.reducer,
      loader: loaderSlice.reducer,
      navbarLinks: navBarSlice.reducer,
      lang: langSlice.reducer,
      products: productSlice.reducer,
      subNav: subCategoryNavSlice.reducer,
      template: pagesTemplateSlice.reducer,
      cookies: cookiesState.reducer,
    },
  },
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
