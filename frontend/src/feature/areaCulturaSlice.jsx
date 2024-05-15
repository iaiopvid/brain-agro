import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const areaCulturaState = {
  updateState: false,
  loading: false,
  areaCulturaList: [],
  error: "",
  response: "",
};

const url_api = process.env.URL_API;

export const fetchAreaCultura = createAsyncThunk(
  "area/fetchAreaCultura",
  async () => {
    const response = await axios.get(`${url_api}/area/cultura`);
    return response.data.response;
  }
);

const areaCulturaSlice = createSlice({
  name: "area",
  initialState: areaCulturaState,
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
      .addCase(fetchAreaCultura.fulfilled, (state, action) => {
        state.areaCulturaList = action.payload;
      })
      .addCase(fetchAreaCultura.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default areaCulturaSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  areaCulturaSlice.actions;
