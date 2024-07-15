"use client";
import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/ProductsSlice";
import FunctionalityReducer from "./slices/FunctinalitySlice";
import InfiniteScrollReducer from "./slices/InfiniteScroll";
import CheckoutReducer from "./slices/Checkout";

const Store = configureStore({
  reducer: {
    products: ProductsReducer,
    functionality: FunctionalityReducer,
    infiniteScroll: InfiniteScrollReducer,
    checkout: CheckoutReducer,
  },
});
export default Store;
