import { Class } from "types";
import { Form } from '@unform/web';
import getValidationErrors from 'utils/getValidationErrors';
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { FormHandles } from "@unform/core";

import { Input } from 'components/Input';
import { useCallback, useEffect, useRef } from 'react';
import { DatePicker } from "components/DatePicker";
import { createRequest, updateRequest } from "store/modules/class/actions";
interface FormClassProps {
  entity?: Class;
  id_module?:number;
  type: 'create' | 'edit';
}
interface FormProps extends Class{

}

const schema  = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório!"),
    exhibition:Yup.date().nullable().transform((curr, orig) => (orig === "" ? null : curr)).required('Campo obrigatório!').nullable(),
  })

export default function FormClass({entity, id_module,type} : FormClassProps){
  const loading = false;
  const dispatch= useDispatch();

   useEffect(()=>{
    if(entity){
      formRef.current?.setData(entity);
    }
  },[])

  const handleSubmit = useCallback(
    async (data: FormProps) =>{
      try{
        formRef.current?.setErrors({});
        await schema.validate(data, { abortEarly: false,});
        
        console.log(data.exhibition);
        if(type === 'create'){
          data = {...data, id_module}
          if(id_module){
          dispatch(createRequest(data, id_module));
          }
         
        }else{
            data = { ...data, id: entity?.id, id_module};
              if(id_module){
                dispatch(updateRequest(data, id_module));
              }
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
  const formRef = useRef<FormHandles>(null);
  return(<div className="content"><Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" type="text" label="Descrição" />
          <DatePicker name="exhibition" label="Horário" />
      <button type="submit" className="btn">Adicionar</button>
      {loading ? <p>Aguarde...</p> : ''}
    </Form></div>)
}