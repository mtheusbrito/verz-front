import { Wrapper, Content } from "./styles";
interface AuthLayoutIProps{
  children: React.ReactNode
}
export default function SiteLayout({ children }: AuthLayoutIProps) {
  return (
    <Wrapper>
      <Content>{children} </Content>
    </Wrapper>
  );
}