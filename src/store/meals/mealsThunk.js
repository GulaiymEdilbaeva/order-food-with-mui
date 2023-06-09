import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { fetchRequest } from "../../lib/fetchAPI";

export const getFoods = createAsyncThunk(
  "meals/getMeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchRequest("/foods");

      return response;
    } catch (error) {
      return rejectWithValue(
        error?.response.message || "Something went wrong!"
      );
    }
  }
);
