import React from 'react'
/*
import {Column, Table} from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
*/
//import 'react-virtualized/styles.css'
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  InfiniteLoader, List
} from "react-virtualized"

export const ListadoInfinito = ( props ) =>{
  console.log("Listado.tabla=", props.tabla)

let estilos = {
   "height":"2em"
}
let styleContenedor = {
  "height":"300px",
  "color": "white",
  "backgroundColor":"black"
}

return (
 <>
  <h2>Scroll infinito</h2>
  <div style={styleContenedor}>
  <AutoSizer>{
    ({width, height})=>( 
      <List
        height = {height /* altura utilizable en medidas CSS */}
        width={width}
        rowHeight={(n)=>24 /* altura fila???, numero o funcion: (index)=>num */ }   
        rowCount = {24}
        overscanRowCount={1 /*filas cacheadas al hacer scroll, def=10 */}
        rowRenderer = { ({index, key, style, parent})=>{
          return (
            <div key={index}>
              Elementos:{ props.tabla[index]? <>{props.tabla[index].firstName}</> : "-no--"}
            </div>
          );
        } }
      >
    </List>

    )
  }
  </AutoSizer>

  </div>
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