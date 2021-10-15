import { configureStore } from "@reduxjs/toolkit";
import paragraphReducer from "./paraghraphSlice";

export const store = configureStore({
  reducer: {
    paraghraph: paragraphReducer,
  },
});
