import AdminLayout from "layouts/Admin";
import AuthLayout from "layouts/Auth";
import SiteLayout from "layouts/Site";
import { useSelector } from "react-redux";
import { RouteProps as ReactDomRouteProps, Route as ReactDOMRoute,  Redirect} from "react-router-dom";
import { AuthState } from "store/modules/auth/types";

import { ApplicationState } from "store/types";


interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
  signed?: boolean;
  isAuthRoute?: boolean
  isSite?: boolean
  isMaster?:boolean
}




export const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isAuthRoute =false,
  isSite = false,
  isMaster = false,
  component: Component,
  ...rest
}) => {
 const { signed, master } = useSelector<ApplicationState>((state) => state.auth) as AuthState;
  if (!signed && isPrivate) {
    return <Redirect to="/acessar" />;
  }
  if(signed && isAuthRoute){
    return <Redirect to="/" />;
  }
  if(isMaster && !master){
    return <Redirect to='/adm'/> 
  }


  

  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
          isAuthRoute? <AuthLayout>
            <Component />
          </AuthLayout> : (isSite ? <SiteLayout><Component/></SiteLayout> : <AdminLayout><Component/></AdminLayout>)
          
      )}
    />
  );
}
