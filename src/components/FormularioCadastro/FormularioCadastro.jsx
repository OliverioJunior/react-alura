import React, { Component } from "react";
import "./style.css"
class FormularioCadastro extends Component {
    
    constructor(props){
        super(props);
        this.titulo = "";
        this.nota = "";
    }
    handleMudancaTitulo(e){
      this.titulo = e.target.value 
         console.log(this.titulo)
    }
    handleMudancaNota(e){
        this.nota = e.target.value       
    }
    setHandle(){
      console.log(this.nota)
       }
    criarNota(e){
        e.preventDefault();
        e.stopPropagation()
        this.props.criarNota(this.titulo,this.nota);
    }
    render() {
        
        return (
            <form className="formulario-cadastro" onSubmit={this.criarNota.bind(this)}>
                <input
                 className="_input"
                 type="text" 
                 placeholder=" Título" 
                 onChange={this.handleMudancaTitulo.bind(this)}/>
                <textarea
                onChange={this.handleMudancaNota.bind(this)}
                row={15} 
                placeholder="Escreva sua nota..." />
                <button
                onClick={this.setHandle.bind(this)}>Criar Nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;