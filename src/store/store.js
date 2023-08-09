import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos-slice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  devTools: true,
});

export default store;
