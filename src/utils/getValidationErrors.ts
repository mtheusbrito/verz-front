import { toast } from 'react-toastify';
import { ErrorResponse } from 'types';
import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): IErrors {
  const validationErrors: IErrors = {};

  err.inner.forEach(error => {
    validationErrors[error.path ?? ''] = error.message;
  });

  return validationErrors;
}

export function errorValidator(){

}


export function alertError(err : ErrorResponse){
toast.error(`${err.response.data.error}`);
}