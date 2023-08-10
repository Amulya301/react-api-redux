import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../customApi/customApi";

export const fetchResponse = createAsyncThunk(
  "todos/fetchResponse",
  async () => {
    const response = await api.get("/todos").catch((err) => err);
    return response.data;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    error:false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchResponse.fulfilled, (state, action) => {
      state.data = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(fetchResponse.rejected, (state) => {
      state.error = true;
    });
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
