import { Link, useParams } from "react-router-dom";
import { ParamsProps } from "types";
import { useGetData } from 'use-axios-react';
import { Header } from "./styles";


export default function ClassesPageAdm(){
  let { id_module } = useParams<ParamsProps>();
  const [data, loading, error] = useGetData(`/module/${id_module}`);
  
  return (<div>
    <Header>
      <h3>Aulas</h3>
      <Link to={`/adm/modulos/${id_module}/aulas/novo`} className="btn">Adicionar aula</Link>
    </Header>

    </div>)
}