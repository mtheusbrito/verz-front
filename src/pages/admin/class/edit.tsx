import FormClass from "./form";
import { Header } from "./styles";
import { useGetData} from 'use-axios-react'
import { useParams } from "react-router";
import { Class, ParamsProps } from "types";

import { toast } from "react-toastify";
import history from "services/history";

export default function EditClassAdm(){
    let {id_module, id_class} = useParams<ParamsProps>();
  
  
  const [data, loading, error] = useGetData(`/classes/${id_class}`);
  const entity: Class = data


 
  function redirect(){
    toast.error('Aula não encontrado!');
    history.push(`/adm/modulos/${id_module}/aulas`);   
  }
  return(<div><Header><h3>Ediçao de aula</h3></Header>
   {loading ? <span>Carregando...</span> : (
    module ? <FormClass type={'edit'} entity={entity} id_module={Number(id_module)}/> : redirect()
  )}
  
  


  </div>);
}