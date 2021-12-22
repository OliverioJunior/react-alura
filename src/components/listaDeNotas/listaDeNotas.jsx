import React, { Component } from "react";
import CardNota from "../CardNota"
import "./style.css"
class ListaDeNotas extends Component {
    render() {
        return (
            <ul className = "lista-de-notas" >
               
                    {Array.of("Trabalho","Trabalho","Estudos").map((i,index)=>{
                        return(
                            <li  key={index}>
                                <div>{i}</div>
                                <CardNota/> 
                            </li>
                        )
                    })}
                
            </ul>
        )
    }

}

export default ListaDeNotas;