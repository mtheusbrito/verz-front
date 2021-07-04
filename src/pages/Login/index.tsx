import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Input } from 'components/Input';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from 'store/modules/auth/actions';
import { ApplicationState } from 'store/types';
import getValidationErrors from 'utils/getValidationErrors';
import * as Yup from "yup";

interface FormProps{
  email: string;
  password: string;
}

 const schema  = Yup.object().shape({
    email: Yup.string().required("Email obrigatório!").email("Informe um endereço de email válido!"),
    password : Yup.string().required('Senha obrigatória!'),
  })
export function LoginPage(){
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);
  const loading: any = useSelector<ApplicationState>(
    (state) => state.auth.loading
  );

  const handleSubmit = useCallback(
    async (data: FormProps) =>{
      try{
        formRef.current?.setErrors({});
        await schema.validate(data, { abortEarly: false,});
        dispatch(loginRequest(data.email, data.password));
        
      }catch(err){
        if(err){
          if(err instanceof Yup.ValidationError){
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);

            return;
          }
        }
      }
    }, [],
  )
 
  return (<div>

    <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Senha" />
      <button type="submit">Login</button>
      {loading ? <p>Aguarde...</p> : ''}
    </Form>
  </div>)
}