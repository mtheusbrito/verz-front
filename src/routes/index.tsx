
import { HomePage } from "pages/Home";
import { LoginPage } from "pages/Login";
import { Switch } from "react-router-dom";
import { Route } from "./Routes";
export default function Routes() {

  
  return (
          <Switch >
          <Route path="/" exact component={HomePage} />
          <Route path="/acessar" component={LoginPage} isAuthRoute/>
          <Route path='/adm' exact component={HomePage}  isPrivate />
          <Route path="/adm/modulos" component={HomePage}  isPrivate/>
          <Route path="/adm/modulos/novo" component={HomePage}  isPrivate/>
          <Route path="/adm/modulos/:id/editar" component={HomePage}  isPrivate/>
          <Route path="/adm/modulos/:id/aulas" component={HomePage}  isPrivate/>
          <Route path="/adm/modulos/:id/aulas/novo" component={HomePage}  isPrivate/>
          <Route path="/adm/modulos/:id/aulas/:id_aula/editar" component={HomePage}  isPrivate/>

        </Switch>
   

  );
}