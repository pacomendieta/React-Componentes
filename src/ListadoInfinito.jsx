import React from 'react'
import {Column, Table} from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import List from 'react-virtualized/dist/commonjs/List';


export const ListadoInfinito = ( props ) =>{
  console.log("Listado.tabla=", props.tabla)

return (
 <>
  <h2>Scroll infinito</h2>

  <h2>Listado Infinito </h2>
  <>
  {
  props.tabla?.map( (fila)=>

    <div key={fila.id}>
       <span>{fila.id}</span> <span>{fila.firstName}</span>
    </div>
   
   )
  }
   </>
 </>
)

}//ListadoInfinito