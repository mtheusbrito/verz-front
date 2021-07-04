import { Class, Module } from 'types';
import { Form } from '@unform/web';
import getValidationErrors from 'utils/getValidationErrors';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { createRequest, updateRequest } from './../../../store/modules/module/actions';
import { FormHandles } from '@unform/core';

import { Input } from 'components/Input';
import { useCallback, useEffect, useRef } from 'react';

interface FormClassProps {
  entity?: Module;
  type: 'create' | 'edit';
}
interface FormProps extends Class {}

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório!'),
});

export default function FormClass({ entity, type }: FormClassProps) {
  const formRef = useRef<FormHandles>(null);
  const loading = false;
  const dispatch = useDispatch();
  useEffect(()=>{
    if(entity){
      formRef.current?.setData(entity);
    }
  },[])
  const handleSubmit = useCallback(async (data: FormProps) => {
    try {
      formRef.current?.setErrors({});
      await schema.validate(data, { abortEarly: false });

      if (type === 'create') {
        dispatch(createRequest(data));
      } else {
        data = { ...data, id: entity?.id };
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

        <button type="submit" className="btn">
          {entity ? 'Atualizar' : 'Adicionar'}
        </button>
        {loading ? <p>Aguarde...</p> : ''}
      </Form>
    </div>
  );
}
