import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllData } from "../apis/userDataApi";
const initialState = {
  data:[]
};
export const getAllDataAsync = createAsyncThunk(
  'UserData/getAllData',
  async () => {
    console.log("called async fun")
    const response = await getAllData ();
    console.log(response,"response")
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
        console.log("hey chck")
        state.data = action.payload;
      })
    }
});

export const userDataReducer = userDataSlice.reducer;
export const { updateData } = userDataSlice.actions;
