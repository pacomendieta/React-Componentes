import React,{useRef,useState} from 'react'
import './modal.css'
import Table from './Tabla.jsx'

export const Modal = ( {Componente, estado="visible"} )=>{
  const refModal = useRef()
  const hCerrarModal=()=>{
     refModal.current.style.visibility='hidden'
  }

  return (
  <> 
   <div  ref={refModal}  className='modal-container '
   style={{"visibility": `${estado}`}} >
      <div className='modal-content'>
        <h1>Contenido Modal</h1>
        <Componente />
        <button className="close-modal" id="close-modal" onClick={hCerrarModal}>
            close
        </button>
      </div>
  </div>
  </>
  )
}

