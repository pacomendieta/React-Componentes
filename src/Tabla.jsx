import React,{useState, useEffect} from 'react';

const USERS_URL =   'http://localhost:8002/personas';

export default function Table () {

const usePagina=()=>{
  let paginaInicial={count:0,actualPage:0,lastPage:0,results:[], cargada:false}
  let [pagina, setPagina] = useState( paginaInicial )
  const cargarPersonas=( datos )=>{
       setPagina( {actualPage:pagina.actualPage,results:[...datos.results], count:datos.count,  lastPage:Math.round(datos.count/10), cargada:true } )
   }
   const setActualPage=(p)=>setPagina( {...pagina, actualPage:p})
   return [ pagina, cargarPersonas, setActualPage ]
}
let [pagina, cargarPersonas, setActualPage] = usePagina ()
console.log("Estado:", pagina)

useEffect(()=>{
    console.log("useEffect() ")
    fetch (USERS_URL+"?page="+pagina.actualPage,{method:'GET'})
    .then ( (data)=>data.json() )
    .then ( (res)=>{ 
      console.log("CARGADO:", USERS_URL+"?page="+pagina.actualPage ,res)
      //setPaginaActual(res)
      //setCargado(true)
      cargarPersonas(res)
    })
    .catch (e => console.error("Error en fetch", e))
},[ pagina.actualPage ])

const Tabla = ()=>(
  <div>
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody>
    {
           pagina.results?.map((row,idx)=>
          <tr key={idx}>
            <td>{row.id}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
          </tr>
        )
    }
    </tbody>
  </table>
</div>
 )

 const isDisabled=( )=>{

 }
 const hFirstPageBtn =()=>setActualPage( 0)
 const hNextPageBtn  =()=>setActualPage( pagina.actualPage + 1)
 const hPrevPageBtn  =()=>setActualPage( pagina.actualPage - 1)
 const hLastPageBtn  =()=>setActualPage( pagina.lastPage )

 const Botonera=()=>{
   return (
    <section className="pagination">
    <button className="first-page-btn" disabled={!pagina.cargada || pagina.actualPage==0} onClick={hFirstPageBtn}>first</button>
    <button className="previous-page-btn" disabled={!pagina.cargada || pagina.actualPage==0} onClick={hPrevPageBtn} >previous</button>
    <button className="next-page-btn" disabled={!pagina.cargada || pagina.actualPage==pagina.lastPage}  onClick={hNextPageBtn}>next</button>
    <button className="last-page-btn" disabled={!pagina.cargada || pagina.actualPage==pagina.lastPage} onClick={hLastPageBtn}>last</button>
  </section>
   )
 }
return ( 
<>
  {pagina.cargada? <Tabla /> : <p>Cargando...</p> }
  <Botonera  />
</> )


    
 

} //Table
