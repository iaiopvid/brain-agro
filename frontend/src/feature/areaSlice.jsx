import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const areaState = {
  updateState: false,
  loading: false,
  areaList: [],
  error: "",
  response: "",
};

const url_api = process.env.URL_API;

export const fetchArea = createAsyncThunk(
  "area/fetchArea",
  async () => {
    const response = await axios.get(`${url_api}/produtor-rural`);
    return response.data.response;
  }
);

const areaSlice = createSlice({
  name: "area",
  initialState: areaState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArea.fulfilled, (state, action) => {
        state.areaList = action.payload;
      })
      .addCase(fetchArea.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default areaSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  areaSlice.actions;
