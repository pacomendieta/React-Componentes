import React, {Component} from "react";
import { render} from 'react-dom';
import "./style.css";


let nombre = "Paco";


class App extends Component {
    constructor (  ) {
      super(  );
    }
    render() {
      return (
        <div>
        < Formulario  />
        </div>
      );
    }
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
  enviaFormulario =()=>{ console.log (this.state)}
  render() {
    return (
    <form>
       <input type='email'    placeholder='Email'    value={this.state.email} onChange={(e)=>this.actualizaCampo(e,'email')}  />
       <input type='password' placeholder='Password' value={this.state.password} onChange={(e)=>this.actualizaCampo(e,'password')} />
       <div>
       <button type='submit'  onClick={ ()=>this.enviaFormulario()}> Iniciar Sesion</button>
       </div>
    </form>
    );
  }
}



render (<App/>, document.getElementById('root'));