import React, { Component } from "react";
import "./style.css"
class FormularioCadastro extends Component {
    render() {
        return (
            <form className="formulario-cadastro">
                <input type="text" placeholder=" Título" />
                <textarea
                
                row={15} 
                placeholder="Escreva sua nota..." />
                <button>Criar Nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;