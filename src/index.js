import React, {Component, useState,  useRef, cloneElement} from "react";
import { render} from 'react-dom';
import { createContext } from 'react'
import "./style.css";
import { FormularioR} from './FormularioR'
import { classnames } from './classnames'
import Table from './Tabla'
import {Modal} from './Modal'
import {Prueba} from './Proptypes.tsx'
import {ListaRegistros} from './ListaRegistros'
import {ListadoInfinito} from './ListadoInfinito'

let nombre= "Paco";




export const App =()=> {

    let refModal = useRef(null)
    let tabla=[]
    const USERS_URL = 'http://localhost:8001/personas';
    const hOpenModal=()=>{
      refModal.current.abrir()
    }
    const ThemeContext = createContext()
    
    fetch (USERS_URL)
    .then ( (data)=>data.json() )
    .then ( (res)=>{ 
         tabla = [...res]
   //   console.log("Tabla:", tabla)
    })

    return (
      <ThemeContext.Provider value={"oscuro"}>
      <div>
      {/*

      < Formulario  />
      < FormularioR />
      < Button  text="Botón" estilo='primary'></Button>
      < Counter />
      < Table />
      */}
      < Prueba titulo='Botón' />
      < Prueba titulo='Botón Dos' />


      
      <button onClick={hOpenModal} >Abrir Modal</button> 
      <ListaRegistros /> 
      < Modal Componente={FormularioR}  ref={refModal} />


      </div>
      </ThemeContext.Provider>
    )
  }




class Formulario extends Component {
  constructor ( props ) {
    super( props );
    this.state = { email:'', password:''};
  }
  actualizaCampo=(e, campo )=>{ 
    let estado = this.state;
    estado[campo]= e.target.value; 
    this.setState(estado); 
    console.log(campo,':',e.target.value) 
  }
  enviaFormulario =(e)=>{e.preventDefault(); console.log (this.state)}
  render() {
    return (
    <form>
       <input type='email'    placeholder='Email'    value={this.state.email} onChange={(e)=>this.actualizaCampo(e,'email')}  />
       <input type='password' placeholder='Password' value={this.state.password} onChange={(e)=>this.actualizaCampo(e,'password')} />
       <div>
       <button type='submit'  onClick={ (e)=>this.enviaFormulario(e)}> Iniciar Sesion</button>
       </div>
    </form>
    );
  }
}

function Button({ text, estilo }) {
  return (
    <button style={classnames['button'][estilo]} onClick={(e)=>enviaFormulario(e)}>
      {text}
    </button>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  )
}

render (<App/>, document.getElementById('root'));