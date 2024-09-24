import React, { Component } from 'react';

class CicloDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "Componente montado"
    };
    console.log("Constructor: El componente se está creando.");
  }

  componentDidMount() {
    console.log("componentDidMount: El componente se montó en el DOM.");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: El componente se actualizó.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: El componente se va a desmontar.");
  }

  actualizarEstado = () => {
    this.setState({ mensaje: "Estado actualizado" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.mensaje}</h1>
        <button onClick={this.actualizarEstado}>Actualizar estado</button>
      </div>
    );
  }
}

export default CicloDeVida;
