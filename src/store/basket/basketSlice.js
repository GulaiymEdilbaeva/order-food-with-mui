import { createSlice } from "@reduxjs/toolkit";
import { addItem, getBasket } from "./basketThunk";

const initialState = {
  items: [],
  isLoading: false,
  isError: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = "";
      })
      .addCase(getBasket.pending, (state, action) => {
        state.items = [];
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getBasket.rejected, (state, action) => {
        state.isLoading = false;
        state.items = [];
        state.isError = action.payload;
      });
    builder
      .addCase(addItem.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = "";
      })
      .addCase(addItem.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(addItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
