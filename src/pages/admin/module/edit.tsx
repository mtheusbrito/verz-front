import FormClass from "./form";
import { Header } from "./styles";
import { useGetData} from 'use-axios-react'
import { useParams } from "react-router";
import { Module, ParamsProps } from "types";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import history from "services/history";

export default function EditModuleAdm(){
  let {id_module} = useParams<ParamsProps>();
  
  
  const [data, loading, error] = useGetData(`/modules/${id_module}`);
  const module: Module = data
  function redirect(){
    toast.error('deu erro aqui!');
    history.push('/adm/modulos');   
  }
  return(<div><Header><h3>Ediçao de modulo</h3></Header>
  {loading ? <span>Carregando...</span> : (
    module ? <FormClass type={'edit'} entity={module}/> : redirect()
  )}
  

  </div>);
}