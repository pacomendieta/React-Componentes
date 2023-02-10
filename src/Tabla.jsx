import React,{useState, useEffect} from 'react';

const USERS_URL = 'http://localhost:8001/personas';
let x
export default function Table () {
  let [cargado,setCargado]=useState(false)
  let paginaInicial={count:0,page:0,lastpage:0,results:[]}
  let [paginaActual, setPaginaActual] = useState(paginaInicial)


useEffect(()=>{
  if (!cargado) {
    console.log("useEffect() porque paginaActual= ",paginaActual)
    fetch (USERS_URL)
    .then ( (data)=>data.json() )
    .then ( (res)=>{ 
      console.log("RES:", res)
      //paginaInicial = JSON.parse( JSON.stringify( res )); 
      paginaInicial = {...res}
      console.log("DATA1:",paginaInicial)
      //setPaginaActual( paginaInicial ) //setPaginaActual( paginaInicial )
      setPaginaActual(paginaInicial)
      setCargado(true)
    })
  }
},[ paginaActual.count ])

 
  return (
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
            paginaActual.results?.map((row,idx)=>
              <tr key={idx}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.secondName}</td>
              </tr>
            )
        }
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn">first</button>
        <button className="previous-page-btn">previous</button>
        <button className="next-page-btn">next</button>
        <button className="last-page-btn">last</button>
      </section>
    </div>
  );
};
