import React from 'react'
import {useState} from 'react'
import './formulario.css'

const useField = ({type,placeholder})=>{
    const [value, setValue] = useState('')
    const onChange = event=>{
        setValue(event.target.value)
    }
    return {
        type,value,onChange,placeholder
    }
}


export const Formulario = ( props )=>{
const email = useField({type:'text', placeholder:'Email'})
const pass  = useField({type:'password', placeholder:'password'})


  const enviaFormulario =(e)=>{ e.preventDefault(); console.log ("Formulario Enviado:", estado)}
  
  
  return (
    <form className={props.class}>
      <input name='Email' {...email}   />
      <input name='pass'  {...pass }   />
      <div>
        <button type='submit'  onClick={ (e)=>enviaFormulario(e)}> Iniciar Sesion</button>
      </div>    
    </form>
  )

}