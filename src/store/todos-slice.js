import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../customApi/customApi";

export const fetchResponse = createAsyncThunk(
  "todos/fetchResponse",
  async () => {
    const response = await api.get("/todos").catch((err) => console.log(err));
    return response.data;
  }
);

const initialState = {
  todos: [],
  error: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResponse.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(fetchResponse.rejected, (state) => {
      state.error = true;
    });
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
