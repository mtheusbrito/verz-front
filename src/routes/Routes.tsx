import { useSelector } from "react-redux";
import { RouteProps as ReactDomRouteProps, Route as ReactDOMRoute,  Redirect} from "react-router-dom";
import { AuthState } from "store/modules/auth/types";

import { ApplicationState } from "store/types";


interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
  signed?: boolean;
  isAuthRoute?: boolean
}




export const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isAuthRoute =false,
  component: Component,
  ...rest
}) => {
  const { signed } = useSelector<ApplicationState>((state) => state.auth) as AuthState;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }
  if(signed && isAuthRoute){
    return <Redirect to="/" />;
  }


  

  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
          <Component />
      )}
    />
  );
}
