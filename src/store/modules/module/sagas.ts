import axios from "axios";
import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import history from "services/history";
import { ErrorResponse } from "types";
import { failureRequest, reloadData, successRequest } from "./actions";
import { CreateRequestAction, CREATE_REQUEST, DELETE_REQUEST, UPDATE_REQUEST , UpdateRequestAction,DeleteRequestAction } from "./types";

export function* create({ payload }: CreateRequestAction) {
  try {
    const { name } = payload.module;
    yield call(axios.post, '/modules', {
    name
    });
    yield put(successRequest());
  
    toast.success('Modulo adicionado!');
    history.push('/adm/modulos');

  } catch (err: any) {
      yield put(failureRequest(err as ErrorResponse));
  }
  
}
export function* update({ payload }: UpdateRequestAction) {
  try {
    const { id, name } = payload.module;
    yield call(axios.put, `/modules/${id}`, {
    name
    });
    yield put(successRequest());
  
    toast.success('Modulo atualizado!');
    history.push('/adm/modulos');


  } catch (err: any) {
     yield put(failureRequest(err as ErrorResponse));
  }
  
}
export function* destroy({ payload }: DeleteRequestAction) {
  try {
    const { id } = payload;
    yield call(axios.delete, `/modules/${id}`);
    yield put(successRequest());
    yield put(reloadData(true));  
    toast.success('Modulo removido!');    

  } catch (err: any) {
     yield put(failureRequest(err as ErrorResponse));
  }
  
}
export default all([
  takeLatest(CREATE_REQUEST, create),
  takeLatest(UPDATE_REQUEST, update),
  takeLatest(DELETE_REQUEST, destroy)
]);