import {all, call, spawn, take, takeLatest, fork, cancel, actionChannel} from "redux-saga/effects";
import peopleSaga from "./people";


export default function* rootSaga() {
  const sagas = [peopleSaga]

  yield all(sagas.map(saga => spawn(saga)))
}