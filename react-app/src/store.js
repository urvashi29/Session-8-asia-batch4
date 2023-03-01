import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "./slices/postApi";

// RTK has inbuilt middleware
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);
