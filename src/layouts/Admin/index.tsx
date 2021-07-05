import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "store/modules/auth/actions";
import { AuthState } from "store/modules/auth/types";
import { ApplicationState } from "store/types";
import { Wrapper, Content, Sidebar} from "./styles";
interface AuthLayoutIProps{
  children: React.ReactNode
}
export default function AdminLayout({ children }: AuthLayoutIProps) {
  const dispatch = useDispatch();
  const { master } = useSelector<ApplicationState>((state) => state.auth) as AuthState;
  return (
    <Wrapper>
      <Sidebar>
          <Link to="/adm/modulos">Modulos</Link>
          {master? (<Link to="/adm/usuarios">Usuários</Link>): ''}
          

          <button onClick={()=>dispatch(logout())}>Sair</button>
      </Sidebar>
      <Content>{children} </Content>
    </Wrapper>
  );
}