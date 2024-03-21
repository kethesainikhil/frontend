import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllData, uploadSourceCode } from "../apis/userDataApi";
const initialState = {
  data:[],
  output:[],
  currentOutput:[]
};
export const getAllDataAsync = createAsyncThunk(
  'UserData/getAllData',
  async () => {
    const response = await getAllData ();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);
export const uploadSourceCodeAsync = createAsyncThunk(
  'UserData/uploadSourceCode',
  async (id) => {
    console.log("in the upload async")
    const response = await uploadSourceCode (id);

    // The value we return becomes the `fulfilled` action payload
    response.id = id;
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
    updateCurrentOutput: (state, action) => {
      state.currentOutput = action.payload
    }
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
      .addCase(uploadSourceCodeAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.currentOutput = [];
        state.currentOutput = action.payload;
        state.output.push(action.payload);
      })
    }
});

export const userDataReducer = userDataSlice.reducer;
export const { updateData ,updateCurrentOutput} = userDataSlice.actions;
