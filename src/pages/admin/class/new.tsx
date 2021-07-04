import { useParams } from "react-router-dom";
import { ParamsProps } from "types";
import FormClass from "./form";
import { Header } from "./styles";


export default function NewClassPageAdm(){
  let {id_module} = useParams<ParamsProps>();
  return(<div><Header><h3>Nova aula</h3></Header>
  <FormClass type={'create'} id_module={Number(id_module)}/>
  </div>);
}