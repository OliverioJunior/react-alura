import React, { Component } from "react";
import CardNota from "../CardNota"
import "./style.css"
class ListaDeNotas extends Component {
    
    
    render() {
        return (
            <ul className = "lista-de-notas" >
               {this.props.notas.map((notas,index)=>{
                    return(
                        <li key={index}>
                            <div>{index}</div>
                            <CardNota titulo={notas.titulo} text ={notas.texto}/>
                            
                        </li>
                    )
                })}
            </ul>
        )
    }

}

export default ListaDeNotas;