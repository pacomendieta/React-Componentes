import React,{useRef,useImperativeHandle, forwardRef} from 'react'
import './modal.css'


export let Modal = ( props, ref )=>{
  const refModal = useRef()
  const hCerrarModal=()=>{
     refModal.current.style.visibility='hidden'
  }
  // Metodos visibles en el Padre: (con ref.current.metodo() )
  useImperativeHandle( ref, ()=>{ 
    return {
      abrir()  { refModal.current.style.visibility='visible' },
      cerrar() { refModal.current.style.visibility='hidden' }
    }
  } )
  

  return (
  <> 
   <div  ref={refModal}  className='modal-container '
    >
      <div className='modal-content'>
        <h1>Contenido Modal</h1>
        <props.Componente />
        <button className="close-modal" id="close-modal" onClick={hCerrarModal}>
            close
        </button>
      </div>
  </div>
  </>
  )
}
Modal = forwardRef ( Modal)

