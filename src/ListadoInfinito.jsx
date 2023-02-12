import React from 'react'

export const ListadoInfinito = ( props ) =>{
  console.log("Listado.tabla=", props.tabla)

return (
 <>
  <h1>Listado Infinito </h1>
  {
  props.tabla?.map( (fila)=>
    <>
    <div key={fila.id}>
       <span>{fila.id}</span><span>{fila.firstName}</span>
    </div>
    </>
   )
 }
 </>
)

}//ListadoInfinito