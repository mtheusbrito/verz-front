import axios from "axios";
import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import history from "services/history";
import { failureRequest, reloadData, successRequest } from "./actions";
import { CreateRequestAction, CREATE_REQUEST, DELETE_REQUEST, UPDATE_REQUEST , UpdateRequestAction,DeleteRequestAction } from "./types";

export function* create({ payload }: CreateRequestAction) {
  try {
    const { entity, id_module } = payload;
    yield call(axios.post, '/class', {
    exhibition: entity.exhibition,
    name: entity.name,
    id_module
    });
    yield put(successRequest());
  
    toast.success('Aula adicionada!');
    history.push(`/adm/modulos/${id_module}/aulas`);


  } catch (err: any) {
    yield put(failureRequest());
    const { error } = err.response.data;
    error ? toast.error(`Ops! ${error}`) : toast.error('Ops! Contate o suporte!');
  }
  
}
export function* update({ payload }: UpdateRequestAction) {
  try {
    const { entity,id_module } = payload;
    yield call(axios.put, `/class/${entity.id}`, {
      exhibition: entity.exhibition,
      name: entity.name,
      id_module

    });
    yield put(successRequest());
  history.push(`/adm/modulos/${id_module}/aulas`);
    toast.success('Aula atualizada!');


  } catch (err: any) {
    yield put(failureRequest());
    const { error } = err.response.data;
    error ? toast.error(`Ops! ${error}`) : toast.error('Ops! Contate o suporte!');
  }
  
}
export function* destroy({ payload }: DeleteRequestAction) {
  try {
    const { id } = payload;
    yield call(axios.delete, `/class/${id}`);
    yield put(successRequest());
    yield put(reloadData(true));  
    toast.success('Aula removida!');    

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