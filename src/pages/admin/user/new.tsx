import FormClass from "./form";
import { Header } from "./styles";

export default function NewUserPage(){
  
  return(<div><Header><h3>Novo usuário</h3></Header>
  <FormClass type={'create'}/>
  </div>);
}