import axios from "axios";
import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import history from "services/history";
import { createFailure, createSuccess } from "./actions";
import { CreateRequestAction, CREATE_REQUEST } from "./types";

export function* create({ payload }: CreateRequestAction) {
  try {
    const { email,name,confirmPassword,password } = payload.user;
    yield call(axios.post, '/users', {
    email,
    name,
    confirmPassword,
    password 
    });
    yield put(createSuccess());
  
    toast.success('Usuário adicionado!');
    history.push('/admin/usuarios');


  } catch (err: any) {
    yield put(createFailure());
    const { error } = err.response.data;
    error ? toast.error(error) : toast.error('Ops! Contate o suporte!');
  }
  
}

export default all([
  takeLatest(CREATE_REQUEST, create),
]);