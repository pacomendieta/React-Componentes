//Componente ListadoInfinito ( {tabla:[], estilos:{json}={}  })
//   tabla: { id:number,  nombre: string, apellido:string}
//   estilos: { css aplica al contenedor principal del listado }
//Funcionalidad: muestra registros en un contenedor con scroll infinito y la altura de fila adaptada al contenido de cada registro

import React from 'react'

import {   
  AutoSizer,   //Utilidad aporta al listado la Altura y Anchura del contenedor donde se encuentra
  CellMeasurer, //Utilidad que aporta la altura en px de cada fila (contenido fila de varias lineas o parrafos)
  CellMeasurerCache, // complementa utilidad CellMeassurer
  InfiniteLoader, List
} from "react-virtualized"

export const ListadoInfinito = ( props ) =>{

let styleContenedor;

styleContenedor = props.estilos 
?
  {...props.estilos }
: {
  "height":"600px",
  "width":  "600px",
  "color": "white",
  "backgroundColor":"black",
  "padding": "0px"
}

//Usar CellMeasurer para tener un rowHeight que se calcula para cada registro segun las filas que ocupen los datos que contiene
const cache= React.useRef(
  new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight:100
  })
)




return (
 <>
  {props.titulo?<h2>{props.titulo}</h2>:<></> }
  <div style={styleContenedor}>
  <AutoSizer>{
    ({width, height})=>( 
      <List
        height   ={height    /* altura utilizable en medidas CSS */}
        width    ={width    /* ancho */ }
        rowHeight={cache.current.rowHeight   /* altura fila en pixeles. Usar funcion si hay filas con altura variable */ }   
    
        rowCount ={props.tabla.length +1       /* numero total registros/filas  */ }
        overscanRowCount={10 /*filas cacheadas al hacer scroll, def=10 */}
        rowRenderer = { ({index, key, style, parent})=>{
          return (
            <CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index}>
              <div style={style}>
                <p>* { props.tabla[index]? <>{props.tabla[index].id} {props.tabla[index].nombre}</> : "-no--"}</p>
                <p>{props.tabla[index].texto}</p>
              </div>
            </CellMeasurer>
          );
        } }
      >
    </List>

    )
  }
  </AutoSizer>

  </div> 
 </>
)

}//ListadoInfinito