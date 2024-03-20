import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllData } from "../apis/userDataApi";
const initialState = {
  data:[]
};
export const getAllDataAsync = createAsyncThunk(
  'UserData/getAllData',
  async () => {
    const response = await getAllData ();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDataAsync.pending, (state) => {
        state.status = 'loading';

      })
      .addCase(getAllDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
    }
});

export const userDataReducer = userDataSlice.reducer;
export const { updateData } = userDataSlice.actions;
