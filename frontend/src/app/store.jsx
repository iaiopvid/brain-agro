import { configureStore } from "@reduxjs/toolkit";
import producerSlice from "../feature/producerSlice";
import areaSlice from "../feature/areaSlice";
import areaEstadoSlice from "../feature/areaEstadoSlice";
import areaCulturaSlice from "../feature/areaCulturaSlice";

const store = configureStore({
  reducer: {
    producerKey: producerSlice,
    areaKey: areaSlice,
    areaEstadoKey: areaEstadoSlice,
    areaCulturaKey: areaCulturaSlice,
  },
});

export default store;