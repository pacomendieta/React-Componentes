
import React from 'react'
import { ListadoInfinito} from './ListadoInfinito'


const USERS_URL = 'http://localhost:8001/personas';

export const useRegistros=()=>{
  
   fetch (USERS_URL)
    .then ( (data)=>data.json() )
    .then ( (res)=>{ 
         tabla = [...res]
         return ( < ListadoInfinito tabla={ tabla } /> )
    })
    

}//ListaRegistros