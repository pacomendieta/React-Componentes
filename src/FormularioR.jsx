import React from 'react'
import {useState} from 'react'


export const FormularioR = ( )=>{
let [estado, setEstado] = useState({email:'email', password:'pass'})
 
  const actualizaCampo=(e, campo )=>{ 
    let campos = {...estado}
    console.log("actualizaCampo:",e.target.value,"/",campo)
    campos[campo]= e.target.value;
    setEstado( campos ) 
  }
  const enviaFormulario =(e)=>{ e.preventDefault(); console.log ("Formulario Enviado:", estado)}
  
  
  return (
    <form>
      <input type='email' placeholder='Email'  value={estado.email} 
      onChange={(e)=>actualizaCampo(e,'email')}  />
      <input type='password' placeholder='Password' value={estado.password} 
      onChange={(e)=>actualizaCampo(e,'password')} />
      <div>
        <button type='submit'  onClick={ (e)=>enviaFormulario(e)}> Iniciar Sesion</button>
      </div>    
    </form>
  )

}