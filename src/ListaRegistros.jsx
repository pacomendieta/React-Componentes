
import React,{useState} from 'react'
import { ListadoInfinito} from './ListadoInfinito'


const USERS_URL = 'http://localhost:8001/personas';

export const ListaRegistros=()=>{
   let [registros,setRegistros] = useState([])
   let [cargados,setCargados ]  = useState(false)
   if (!cargados) {
     fetch (USERS_URL)
     .then ( (data)=>data.json() )
     .then ( (res)=>{ 
          setRegistros ([...res])
          setCargados(true)
     })
   }
   
   return (
   <>
   {
        cargados ?  < ListadoInfinito tabla={ registros } /> :<p>Loading...</p>
   } 
   </> 
   )
}//ListaRegistros