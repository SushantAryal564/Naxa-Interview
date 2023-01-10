import { takeEvery, put } from "redux-saga/effects";
import { GET_NAXA_SERVICES, SET_NAXA_SERVICES } from "./constant";

function* getServies() {
  let data = yield fetch("https://admin.naxa.com.np/api/services");
  data = yield data.json();
  yield put({ type: SET_NAXA_SERVICES, data });
}
function* ServiesSaga() {
  yield takeEvery(GET_NAXA_SERVICES, getServies);
}
export default ServiesSaga;
