import React from "react";
import { Row, Col, Container } from "reactstrap";

const pStyle = { fontSize: "1rem", color: "#262626" };

export default class ListaKosher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: []
    };
    // this.switchToPlatform = this.switchToPlatform.bind(this);
  }

  componentWillMount = () => {
    fetch(
      "http://kosher.org.ar/j_15/web_services/servidor.php?function=products"
    )
      .then(data => data.json())
      .then(res => {
        this.setState({ productos: res.products });
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <h2
          className="pb-2"
          style={{ fontSize: "2rem", fontWeight: "bold", color: "#262626" }}
        >
          Lista Kosher
        </h2>
        <p className="pb-2 m-0" style={pStyle}>
          ¿Querés saber si un producto esta certificado?
        </p>
        <p className="pb-2 m-0" style={pStyle}>
          Buscá por marca, nombre o tipo de producto
        </p>
      </div>
    );
  }
}
