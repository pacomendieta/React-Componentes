import React from 'react'
/*
import {Column, Table} from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
*/
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader, List
} from "react-virtualized"

export const ListadoInfinito = ( props ) =>{
  console.log("Listado.tabla=", props.tabla)

return (
 <>
  <h2>Scroll infinito</h2>
  <List>


  </List>
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