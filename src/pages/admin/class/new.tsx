import FormClass from "./form";
import { Header } from "./styles";

export default function NewClassPageAdm(){
  
  return(<div><Header><h3>Nova aula</h3></Header>
  <FormClass type={'create'}/>
  </div>);
}