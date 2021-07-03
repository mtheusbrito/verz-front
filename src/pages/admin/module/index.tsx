import { Link, useParams } from "react-router-dom";
import { ParamsProps } from "types";
import { useGetData } from 'use-axios-react';
import { Header } from "./styles";


export default function ModulesPageAdm(){
  const [data, loading, error] = useGetData(`/module`);
  
  return (<div>
    <Header>
      <h3>Modulos</h3>
      <Link to={`/adm/modulos/novo`} className="btn">Adicionar modulo</Link>
    </Header>

    </div>)
}