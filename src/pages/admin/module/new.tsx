import FormClass from "./form";
import { Header } from "./styles";

export default function NewModulePageAdm(){
  
  return(<div><Header><h3>Novo modulo</h3></Header>
  <FormClass type={'create'}/>
  </div>);
}