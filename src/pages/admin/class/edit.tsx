import FormClass from "./form";
import { Header } from "./styles";
import { useGetData} from 'use-axios-react'
import { useParams } from "react-router";
import { ParamsProps } from "types";

export default function EditClassAdm(){
  let { id_class , id_module } = useParams<ParamsProps>();
  
  const [data, loading, error] = useGetData(`/module/${id_module}/class/${id_class}`);
  
  return(<div><Header><h3>Ediçao de aula</h3></Header>
  
    
  <FormClass type={'edit'}/>

  </div>);
}