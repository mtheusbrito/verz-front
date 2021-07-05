import axios from "axios";
import { toast } from "react-toastify";
import { all, call, put, takeLatest } from "redux-saga/effects";
import history from "services/history";
import { ErrorResponse, UserCreateEdit } from "types";
import { failureRequest, reloadData, successRequest } from "./actions";
import { CreateRequestAction, CREATE_REQUEST, DeleteRequestAction, DELETE_REQUEST, UpdateRequestAction, UPDATE_REQUEST } from "./types";

export function* create({ payload }: CreateRequestAction) {
  try {
    const { email,name,confirmPassword,password, master } = payload.user;
    yield call(axios.post, '/users', {
    email,
    name,
    confirmPassword,
    password,
    master
    });
    yield put(successRequest());
  
    toast.success('Usuário adicionado!');
    history.push('/adm/usuarios');


  } catch (err: any) {
    yield put(failureRequest(err as ErrorResponse));
  }
  
}



export function* update({ payload }: UpdateRequestAction) {
  try {
    const { email,name,confirmPassword,password, master, id } = payload.user;
    let userUpdated = {
      email,
      name,
      master
    } as UserCreateEdit;

   password && confirmPassword ?  userUpdated = {...userUpdated, confirmPassword} : console.log('');
    
   

    yield call(axios.put, `/users/${id}`, {
    ...userUpdated
    });
    yield put(successRequest());
  
    toast.success('Usuário atualizado!');
    history.push('/adm/usuarios');


  } catch (err: any) {
     yield put(failureRequest(err as ErrorResponse));
  }
  
}

export function* destroy({ payload }: DeleteRequestAction) {
  try {
    const { id } = payload;
    yield call(axios.delete, `/users/${id}`);
    yield put(successRequest());
    yield put(reloadData(true));  
    toast.success('Usuário removido!');    

  } catch (err: any) {
     yield put(failureRequest(err as ErrorResponse));
  }
  
}



export default all([
  takeLatest(CREATE_REQUEST, create),
  takeLatest(DELETE_REQUEST, destroy),
  takeLatest(UPDATE_REQUEST, update)

]);