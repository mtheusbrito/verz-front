import { Link } from "react-router-dom";
import { Wrapper, Content, Sidebar} from "./styles";
interface AuthLayoutIProps{
  children: React.ReactNode
}
export default function AdminLayout({ children }: AuthLayoutIProps) {
  return (
    <Wrapper>
      <Sidebar>
          <Link to="/adm/modulos">Modulos</Link>
          {/* <Link to="/adm/classes">Classes</Link> */}
          <Link to="/adm/modulos">Usuários</Link>
      </Sidebar>
      <Content>{children} </Content>
    </Wrapper>
  );
}