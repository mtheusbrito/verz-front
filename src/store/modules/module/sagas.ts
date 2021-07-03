import axios from "axios";
import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import history from "services/history";
import { failureRequest, successRequest } from "./actions";
import { CreateRequestAction, CREATE_REQUEST, DELETE_REQUEST, UPDATE_REQUEST , UpdateRequestAction,DeleteRequestAction } from "./types";

export function* create({ payload }: CreateRequestAction) {
  try {
    const { name } = payload.module;
    yield call(axios.post, '/module', {
    name
    });
    yield put(successRequest());
  
    toast.success('Modulo adicionado!');
    history.push('/adm/modulos');


  } catch (err: any) {
    yield put(failureRequest());
    const { error } = err.response.data;
    error ? toast.error(`Ops! ${error}`) : toast.error('Ops! Contate o suporte!');
  }
  
}
export function* update({ payload }: UpdateRequestAction) {
  try {
    const { id, name } = payload.module;
    yield call(axios.put, `/module/${id}`, {
    name
    });
    yield put(successRequest());
  
    toast.success('Modulo atualizado!');
    history.push('/adm/modulos');


  } catch (err: any) {
    yield put(failureRequest());
    const { error } = err.response.data;
    error ? toast.error(`Ops! ${error}`) : toast.error('Ops! Contate o suporte!');
  }
  
}
export function* destroy({ payload }: DeleteRequestAction) {
  try {
    const { id } = payload;
    yield call(axios.delete, `/module/${id}`);
    yield put(successRequest());
  
    toast.success('Modulo removido!');
    history.push('/adm/modulos');


  } catch (err: any) {
    yield put(failureRequest());
    const { error } = err.response.data;
    error ? toast.error(`Ops! ${error}`) : toast.error('Ops! Contate o suporte!');
  }
  
}
export default all([
  takeLatest(CREATE_REQUEST, create),
  takeLatest(UPDATE_REQUEST, update),
  takeLatest(DELETE_REQUEST, destroy)
]);