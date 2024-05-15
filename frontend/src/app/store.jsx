import { configureStore } from "@reduxjs/toolkit";
import producerSlice from "../feature/producerSlice";
import areaSlice from "../feature/areaSlice";

const store = configureStore({
  reducer: {
    producerKey: producerSlice,
    areaKey: areaSlice
  },
});

export default store;