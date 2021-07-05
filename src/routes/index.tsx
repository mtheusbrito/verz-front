
import ClassesPageAdm from "pages/admin/class";
import EditClassAdm from "pages/admin/class/edit";
import NewClassPageAdm from "pages/admin/class/new";
import ModulesPageAdm from "pages/admin/module";
import EditModuleAdm from "pages/admin/module/edit";
import NewModulePageAdm from "pages/admin/module/new";
import UsersPageAdm from "pages/admin/user";
import EditUSerAdm from "pages/admin/user/edit";
import NewUserPage from "pages/admin/user/new";
import { ClassPage } from "pages/Class";
import { HomePage } from "pages/Home";
import { LoginPage } from "pages/Login";
import { ModulePage } from "pages/Module";
import { Switch } from "react-router-dom";
import { Route } from "./Routes";
export default function Routes() {

  
  return (
          <Switch >
            
          <Route path={["/","/modulos"]} exact component={ModulePage} isSite/>
           <Route path="/:id/aulas" exact component={ClassPage} isSite/>
          <Route path="/modulos/:id" exact component={ModulePage} isSite/>
          <Route path="/acessar" component={LoginPage} isAuthRoute/>
          <Route path='/adm' exact component={HomePage}  isPrivate />
          <Route path="/adm/modulos"  exact component={ModulesPageAdm}  isPrivate/>

          <Route path="/adm/modulos/novo" component={NewModulePageAdm}  isPrivate/>
          <Route path="/adm/modulos/:id_module/editar" component={EditModuleAdm}  isPrivate/>
          <Route path="/adm/modulos/:id_module/aulas" exact component={ClassesPageAdm}  isPrivate/>
          <Route path="/adm/modulos/:id_module/aulas/novo" component={NewClassPageAdm}  isPrivate/>
          <Route path="/adm/modulos/:id_module/aulas/:id_class/editar" component={EditClassAdm}  isPrivate/>
          
          <Route path="/adm/usuarios" exact component={UsersPageAdm}  isPrivate isMaster/>
          <Route path="/adm/usuarios/novo" component={NewUserPage}  isPrivate isMaster/>
          <Route path="/adm/usuarios/:id_user/editar" component={EditUSerAdm}  isPrivate isMaster/>
        </Switch>
   

  );
}