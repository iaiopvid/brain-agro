import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const areaEstadoState = {
  updateState: false,
  loading: false,
  areaEstadoList: [],
  error: "",
  response: "",
};

const url_api = process.env.URL_API;

export const fetchAreaEstado = createAsyncThunk(
  "area/fetchAreaEstado",
  async () => {
    const response = await axios.get(`${url_api}/area/estado`);
    return response.data.response;
  }
);

const areaEstadoSlice = createSlice({
  name: "area",
  initialState: areaEstadoState,
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
      .addCase(fetchAreaEstado.fulfilled, (state, action) => {
        state.areaEstadoList = action.payload;
      })
      .addCase(fetchAreaEstado.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default areaEstadoSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  areaEstadoSlice.actions;
