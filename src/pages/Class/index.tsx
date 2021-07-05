import { useGetData } from 'use-axios-react';
import {Container, ContainerItem} from './styles';
import { Class, Module} from './../../types'
import {   useParams} from 'react-router-dom';
import Moment from 'react-moment';
interface ParamsProps{
id:string
}
export function ClassPage(){
let { id } = useParams<ParamsProps>();

const [data, loading] = useGetData(`/modules/${id}`);
const module: Module = data;

return (<>
 
  <h1 className="title">Aulas </h1>
    <Container>
      {loading ? (
          <span>Carregando...</span>
        ) : module && module.classes && module?.classes.length > 0 ? (
              <>{module?.classes.map((item, index) => {
                return <ClassItem key={index} classe={item} />
              })}</>
            
        ) : (
          'Nenhum item disponível!'
        )}
      
    </Container>
  
  </>)
}
interface ClassItemProps{
  classe: Class
}
function ClassItem({classe}:ClassItemProps){
  return (<ContainerItem>
      <p>{classe.name} - <Moment date={classe.exhibition} format="DD/MM/YYYY - HH:mm"/></p>
  </ContainerItem>)

}