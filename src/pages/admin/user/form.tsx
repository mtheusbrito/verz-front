import { UserCreateEdit } from 'types';
import { Form } from '@unform/web';
import getValidationErrors from 'utils/getValidationErrors';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { createRequest, updateRequest } from './../../../store/modules/user/actions';
import { FormHandles } from '@unform/core';

import { Input } from 'components/Input';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CheckBox } from 'components/Checkbox';

interface FormClassProps {
  user?: UserCreateEdit;
  type: 'create' | 'edit';
}
interface FormProps extends UserCreateEdit {}

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório!'),
  email: Yup.string().email().required('Campo obrigatório'),
  master: Yup.boolean().default(false),
  password: Yup.string().when("id", {
          is: (id:any) => id === undefined || id === '',
          then: Yup.string()
            .required("Este campo é requerido.")
            .min(6, "A senha deve ter pelo menos 6 caracteres"),
        }),

        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "As senhas devem corresponder"
        ),
});

export default function FormClass({ user, type }: FormClassProps) {
  const formRef = useRef<FormHandles>(null);

  const loading = false;
  const [userUpdated, setUserUpdated] = useState<UserCreateEdit | undefined>(user);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(user){
      formRef.current?.setData(user);
    }
  },[])
  useEffect(()=>{
    if(userUpdated){
        formRef.current?.setData(userUpdated)
         console.log(userUpdated)
    }
  },[userUpdated])
  const handleSubmit = useCallback(async (data: FormProps) => {
    try {
      formRef.current?.setErrors({});
      await schema.validate(data, { abortEarly: false });

      if (type === 'create') {
        dispatch(createRequest(data));
      } else {
        data = { ...data, id: user?.id };
        dispatch(updateRequest(data));
  
      }
    } catch (err) {
      if (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
      }
    }
  }, []);

  return (
    <div className="content">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" type="text" label="Nome" />
         <Input name="id" type="number" hidden label="" />
          <Input name="email" type="mail" label="E-mail" />
          <Input name="password" type="password" label="Password" />
          <Input name="confirmPassword" type="confirmPassword" label="Confirm Password" />
          <CheckBox checked={userUpdated?.master} onChange={()=>setUserUpdated({...userUpdated, master: !userUpdated?.master} as UserCreateEdit)} name="master" />


        <button type="submit" className="btn">
          {user ? 'Atualizar' : 'Adicionar'}
        </button>
        {loading ? <p>Aguarde...</p> : ''}
      </Form>
    </div>
  );
}
