
import React,{useEffect, useState} from 'react'
import { ListadoInfinito} from './ListadoInfinito'

const USERS_URL = 'http://localhost:8001/personas';

let nombresFake=( n )=>{
    return [...Array( n ).keys()].map( (key)=>(
          {
               id: key, 
               nombre: "nombre" +   key,
               apellido: "apellido" + key,
               texto: (key % 2)? " dsf sdaf dsfsdf sdf sdff sadfsfsdf  fdfsdfdsf dsf dfsdf sdff sdfsdf fasdf dsfdsf " : `fdsfds sdafdsf dfdsaf fadsfdsf dsf dsf sdfsfsdf
               dfs asf asdf df sfsd
               f asdfsdfsdf sdf df df
               dsaf sdaf asdfsdf sf sdf sd dsafsadf sadf sdfasdf sdf asdf asdf sadfasdfsdfasdfsadf sdf sadf sadf sdaf sf asdfsf sadf sadf sadf sdafasf asdf sadfasdf asdf sadf sdf sadf sadf sadf sdfsadf sadf sadf as fsadf fsfasfd fsad `
          }
     ))

}

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
        cargados ?  < ListadoInfinito tabla={ nombresFake(10000) } titulo="Listado" /> :<p>Loading...</p>
   } 

   </> 
   )
}//ListaRegistros