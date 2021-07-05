import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRequest, reloadData } from 'store/modules/user/actions';
import { UserState } from 'store/modules/user/types';
import { ApplicationState } from 'store/types';
import {  User } from 'types';
import { Header } from './styles';

export default function UsersPageAdm() {

  const dispatch = useDispatch();
const { reload } = useSelector<ApplicationState>((state) => state.user) as UserState;
  const [users,setUsers] = useState<User[]>([]);
  async function loadingData(){
    try{
      const {data} = await axios.get('/users') as any;
      setUsers(data);
    }catch(err){
      
    }
  }

useEffect(()=>{
loadingData();
},[])

useEffect(()=>{
  if(reload){
loadingData();
dispatch(reloadData(!reload))
  }

},[reload])

  return (
    <>
      <Header>
        <h3>Usuários</h3>
        <Link to={`/adm/usuarios/novo`} className="btn">
          Adicionar usuário
        </Link>
      </Header>
      <div className="content">
        {  users?.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th style={{ width:'5%' ,textAlign:'left'}}>#</th>
                <th style={{ width: '40%',textAlign:'left'}}>Nome</th>
                <th style={{ width: '25%',textAlign:'left'}}>Email</th>
                <th style={{ width: '25%',textAlign:'left'}}>Master</th>
                <th style={{width:'10%',textAlign:'left'}}></th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => {
                return <UserItem key={index} user={item} />;
              })}
            </tbody>
          </table>
        ) : (
          'Nenhum item disponível!'
        )}
      </div>
    </>
  );
}

interface UserItemProps {
  user: User;
}
function UserItem({ user}: UserItemProps) {
    const dispatch = useDispatch();
  return (
    <>
      <tr>
        {console.log(user)}
        <td>{user.id}</td>
        <td>{user.name}</td>
         <td>{user.email}</td>
          <td>{user.master ? 'sim': 'não'}</td>
        
        <td><div className="options">
            <Link to={`/adm/usuarios/${user.id}/editar`}>Editar</Link>
            <button onClick={()=>dispatch(deleteRequest(user.id))}>Remover</button>
          </div></td>
      </tr>
    </>
  );
}
