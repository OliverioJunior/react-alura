import React, {Component} from "react";
import ListaDeNotas from "./components/listaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css"
import './assets/index.css';
class App extends Component {

  constructor(props) {
    super(props);
     this.state = {
      notas:[],
    };
  }
  criarNota(titulo,texto){
      const novaNota = {titulo,texto};
      const novoArrayNotas = [...this.state.notas,novaNota]
      const novoEstado = {
        notas:novoArrayNotas 
      }
      this.setState(novoEstado) 
  }
  render() {
    
    return(
      <>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </>
    );
  }
}

export default App;
