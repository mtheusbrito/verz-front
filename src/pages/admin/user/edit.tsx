import FormClass from "./form";
import { Header } from "./styles";
import { useGetData} from 'use-axios-react'
import { useParams } from "react-router";
import { ParamsProps, User } from "types";
import { toast } from "react-toastify";
import history from "services/history";

export default function EditUSerAdm(){
  let {id_user} = useParams<ParamsProps>();
  
  
  const [data, loading, error] = useGetData(`/users/${id_user}`);
  const user: User = data
  function redirect(){
    toast.error('deu erro aqui!');
    history.push('/adm/usuarios');   
  }
  return(<div><Header><h3>Ediçao de usuário</h3></Header>
  {loading ? <span>Carregando...</span> : (
    module ? <FormClass type={'edit'} user={user}/> : redirect()
  )}
  

  </div>);
}