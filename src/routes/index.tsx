
import { HomePage } from "pages/Home";
import { Switch } from "react-router-dom";
import { Route } from "./Routes";
export function Routes() {

  
  return (

       
          <Switch >
          <Route path="/" exact component={HomePage} />
          <Route path="/acessar" component={HomePage} isAuthRoute/>
          <Route path="/adm/modulos" exact component={HomePage} isAuthRoute isPrivate/>
          <Route path="/adm/modulos/novo" component={HomePage} isAuthRoute isPrivate/>
          <Route path="/adm/modulos/:id/editar" component={HomePage} isAuthRoute isPrivate/>
          <Route path="/adm/modulos/:id/aulas" component={HomePage} isAuthRoute isPrivate/>
          <Route path="/adm/modulos/:id/aulas/novo" component={HomePage} isAuthRoute isPrivate/>
          <Route path="/adm/modulos/:id/aulas/:idaula/editar" component={HomePage} isAuthRoute isPrivate/>

        </Switch>
   

  );
}