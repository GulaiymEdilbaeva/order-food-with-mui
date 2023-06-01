import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "./basket/basketSlice";
import { mealsSlice } from "./meals/mealsSlice";
import { snackbarSlice } from "./snackbar";

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
    [snackbarSlice.name]: snackbarSlice.reducer,
  },
});
