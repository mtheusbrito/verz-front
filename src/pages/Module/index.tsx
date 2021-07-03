import { useGetData } from 'use-axios-react'
export function ModulePage(){
const [data, loading] = useGetData("/modules");
  return (<div>
  
  <h1 className="title">Modulos</h1>
  
  </div>)
}