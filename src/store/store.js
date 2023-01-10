import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { serviesData } from "./servicesReducer";
import ServiesSaga from "./servicesSaga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { services: serviesData },
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(ServiesSaga);
export default store;
