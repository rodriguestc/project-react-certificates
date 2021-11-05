import React, { Component } from 'react';
import './reset.css';
import BaseFormulario from './Components/Pages/BaseFormulario';

class App extends Component{
  render() {
    return (
      <>
        <BaseFormulario aoEnviar={aoEnviarForm} />
      </>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;

