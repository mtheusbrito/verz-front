import { Class } from "types";
import { Form } from '@unform/web';
import getValidationErrors from 'utils/getValidationErrors';
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { FormHandles } from "@unform/core";

import { Input } from 'components/Input';
import { useCallback, useEffect, useRef } from 'react';
import { DatePicker } from "components/DatePicker";
interface FormClassProps {
  entity?: Class;
  module_id?:number;
  type: 'create' | 'edit';
}
interface FormProps extends Class{

}

const schema  = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório!"),
    exhibition:Yup.date().nullable().transform((curr, orig) => (orig === "" ? null : curr)).required('Campo obrigatório!').nullable(),
  })

export default function FormClass({entity, module_id,type} : FormClassProps){
  const loading = false;

  const handleSubmit = useCallback(
    async (data: FormProps) =>{
      try{
        formRef.current?.setErrors({});
        await schema.validate(data, { abortEarly: false,});
        data = {...data, module_id}
        console.log(data.exhibition);
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
          <Input name="name" type="text" label="Descrição" />
          <DatePicker name="exhibition" label="Horário" />
      <button type="submit" className="btn">Adicionar</button>
      {loading ? <p>Aguarde...</p> : ''}
    </Form></div>)
}