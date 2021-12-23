import React, {Component} from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css"
import './assets/index.css';
class App extends Component {

  constructor() {
    super();
  }
  criarNota(titulo,texto){
      console.log("Aqui")
  }
  render() {
    
    return(
      <>
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas />
      </>
    );
  }
}

export default App;
