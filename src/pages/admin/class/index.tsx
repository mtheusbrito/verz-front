import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import history from "services/history";
import { deleteRequest, reloadData } from "store/modules/class/actions";

import { ApplicationState } from "store/types";
import { Module, ParamsProps,Class } from "types";
import { Header } from "./styles";
import Moment from 'react-moment';
import { ClassState } from "store/modules/class/types";


export default function ClassesPageAdm(){
  const dispatch = useDispatch();
  let { id_module } = useParams<ParamsProps>();
  const { reload } = useSelector<ApplicationState>((state) => state.entity) as ClassState;
  
  const [classes, setClasses] = useState<Class[]>([]);
 
  async function loadingData(){
    try{
      const {data} = await axios.get<Module>(`/modules/${id_module}`);
      setClasses(data.classes || []);
    }catch(err){
      
    }
  }
  useEffect(()=>{
    if(!id_module){
      history.push('/adm/modulos');
      toast.error('Modulo não encontrado!')
    }
    loadingData();
  },[]);


useEffect(()=>{
  if(reload){
loadingData();
dispatch(reloadData(!reload))
  }

},[reload])
  return (<>
    <Header>
      <h3>Aulas</h3>
      <Link to={`/adm/modulos/${id_module}/aulas/novo`} className="btn">Adicionar aula</Link>
    </Header>
    <div className="content">
        {  classes?.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th style={{ width: '10%', textAlign: 'left'}}>#</th>
                <th style={{ width: '60%' ,textAlign: 'left'}}>Nome</th>
                <th style={{ width: '20%' ,textAlign: 'left'}}>Exibição</th>
                <th style={{ width: '20%' ,textAlign: 'left'}}></th>


              </tr>
            </thead>
            <tbody>
              {classes.map((item, index) => {
                return <ClassItem key={index} entity={item}  id_module={Number(id_module)}/>;
              })}
            </tbody>
          </table>
        ) : (
          'Nenhum item disponível!'
        )}
      </div>
    </>)
}
interface ClassItemProps{
entity: Class;
id_module: number
}
function ClassItem({entity,id_module}: ClassItemProps){
 const dispatch = useDispatch();
 
  return (
    <>
      <tr>
        <td>{entity.id}</td>
        <td>{entity.name}</td>
        <td><Moment date={entity.exhibition} format="DD/MM/YYYY - HH:mm"/></td>

        <td><div className="options">
            <Link to={`/adm/modulos/${id_module}/aulas/${entity.id}/editar`}>Editar</Link>
            <button onClick={()=>dispatch(deleteRequest(entity.id))}>Remover</button>
          </div></td>
      </tr>
    </>
  );
}