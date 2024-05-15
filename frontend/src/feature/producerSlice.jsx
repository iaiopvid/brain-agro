import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const producerState = {
  updateState: false,
  loading: false,
  producerList: [],
  error: "",
  response: "",
};

const url_api = process.env.URL_API;

export const fetchProducer = createAsyncThunk(
  "producer/fetchProducer",
  async () => {
    const response = await axios.get(`${url_api}/produtor-rural`);
    return response.data.response;
  }
);

export const addProducer = createAsyncThunk(
  "producer/addProducer",
  async (data) => {
    const response = await axios.post(`${url_api}/produtor-rural`, {
      nome: data.nome,
      cidade: data.cidade,
      estado: data.estado,
      cpf_cnpj: data.cpf_cnpj,
      nome_fazenda: data.nome_fazenda,
      area_total: data.area_total,
      area_agricultavel: data.area_agricultavel,
      area_vegetacao: data.area_vegetacao,
      culturas_plantadas: data.culturas_plantadas
    });
    return response.data.response;
  }
);

export const removeProducer = createAsyncThunk(
  "producer/removeProducer",
  async (data) => {
    const response = await axios.delete(
      `${url_api}/produtor-rural/${data}`
    );
    return response.data.id;
  }
);

export const modifiedProducer = createAsyncThunk(
  "producer/modifiedProducer",
  async (data) => {
    const response = await axios.put(
      `${url_api}/produtor-rural/${data.id}`,
      {
        nome: data.nome,
        cidade: data.cidade,
        estado: data.estado,
        cpf_cnpj: data.cpf_cnpj,
        nome_fazenda: data.nome_fazenda,
        area_total: data.area_total,
        area_agricultavel: data.area_agricultavel,
        area_vegetacao: data.area_vegetacao,
        culturas_plantadas: data.culturas_plantadas
      }
    );
    return response.data.response;
  }
);

const producerSlice = createSlice({
  name: "producer",
  initialState: producerState,
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
      .addCase(addProducer.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProducer.fulfilled, (state, action) => {
        state.loading = false;
        state.producerList.push(action.payload);
        state.response = "add";
      })
      .addCase(addProducer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(fetchProducer.fulfilled, (state, action) => {
        state.producerList = action.payload;
      })
      .addCase(fetchProducer.rejected, (state, action) => {
        state.error = action.error.message;
      });

    builder.addCase(removeProducer.fulfilled, (state, action) => {
      state.producerList = state.producerList.filter(
        (item) => item.id != action.payload
      );
      state.response = "delete";
    });

    builder.addCase(modifiedProducer.fulfilled, (state, action) => {
      const updateItem = action.payload;
      const index = state.producerList.findIndex(
        (item) => item.id === updateItem.id
      );
      if (index !== -1) {
        state.producerList[index] = updateItem;
      }
      state.response = "update";
    });
  },
});

export default producerSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  producerSlice.actions;
