import { Class, Module } from "types";
import { Form } from '@unform/web';
import getValidationErrors from 'utils/getValidationErrors';
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { FormHandles } from "@unform/core";

import { Input } from 'components/Input';
import { useCallback, useEffect, useRef } from 'react';

interface FormClassProps {
  entity?: Module;
  type: 'create' | 'edit';
}
interface FormProps extends Class{

}

const schema  = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório!"),
    })

export default function FormClass({entity,type} : FormClassProps){
  const loading = false;

  const handleSubmit = useCallback(
    async (data: FormProps) =>{
      try{
        formRef.current?.setErrors({});
        await schema.validate(data, { abortEarly: false,});
        data = {...data, id: entity?.id}
        
        if(type === 'create'){

        }else{

        }
        
        
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
    const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);
  return(<div className="content"><Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" type="text" label="Nome" />
          
      <button type="submit" className="btn">Adicionar</button>
      {loading ? <p>Aguarde...</p> : ''}
    </Form></div>)
}