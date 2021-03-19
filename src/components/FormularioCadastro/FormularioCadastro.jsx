import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {
  
   constructor(props){
    super()
    this.titulo="";
    this.texto="";
  }
  
  handleMudancaTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  handleMudancaTexto(evento){
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  criarNota(evento){
    evento.stopPropagation()
    evento.preventDefault();
    console.log(`Uma nova nota foi Criada` + this.titulo + "" + this.texto)
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro "
      onSubmit={this.criarNota.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;