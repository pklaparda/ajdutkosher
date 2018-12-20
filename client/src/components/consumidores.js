import React, { Component } from "react";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import FormContacto from "./form-contacto";

import "../styles/style.css";
import "../styles/consumidor.css";

const pathAndroid = "/img/mockup_phone_android.png";
const pathIos = "/img/mockup_phone_ios2.png";
const Android = "android";
const IOS = "ios";

export default class Consumidores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: Android
    };
    this.switchToPlatform = this.switchToPlatform.bind(this);
  }

  switchToPlatform = platform => {
    this.setState({ platform: platform });
  };

  render() {
    return (
      <>
        <Row style={{ position: "relative" }}>
          <img
            src={"/img/consumidores-img.jpg"}
            style={{ width: "100%", height: "50vh", padding: "0" }}
          />
          <div className="carousel-text-fixed">
            <h2 style={{ fontSize: "6vw" }}>Un Valor Agregado</h2>
            <br />
            <br />
            <br />
            <h6 style={{ fontSize: "2vw" }}>
              Somos la certificadora Kosher líder en el mercado alimenticio de
              Argentina. <br />
              <br />
              Nos dedicamos a supervisar y certificar alimentos Kosher en
              Argentina y en el resto de Latinoamérica
            </h6>
          </div>
        </Row>
        <Row>
          <Col
            xs="12"
            sm="12"
            md="6"
            className="d-flex flex-column justify-content-start px-5 pt-5"
          >
            <h2
              className="pb-2"
              style={{ fontSize: "2rem", fontWeight: "bold", color: "#262626" }}
            >
              App Ajdut Kosher
            </h2>
            <p
              className="pb-2 m-0"
              style={{ fontSize: "1rem", color: "#262626" }}
            >
              La Lista Kosher abierta permite chequear desde tu celular todos
              los productos supervisados por Ajdut Kosher.
            </p>
            <h4
              className="pb-4"
              style={{
                fontSize: "1.5rem",
                color: "#262626",
                fontWeight: "bold"
              }}
            >
              Es fácil, rápido y accesible
            </h4>
            <div className="d-flex flex-wrap pb-3">
              <Button className="px-4 mr-4 mb-2 btn-custom">
                Descarga la App
              </Button>
              <Button className="px-4 mb-2 btn-custom">Ver lista online</Button>
            </div>
            <ButtonGroup>
              <Button onClick={e => this.switchToPlatform(IOS)}>iOS</Button>
              <Button onClick={e => this.switchToPlatform(Android)}>
                Android
              </Button>
            </ButtonGroup>
          </Col>
          <Col xs="12" sm="12" md="6" className="px-5">
            <img
              src={this.state.platform === Android ? pathAndroid : pathIos}
              alt=""
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row className="p-5 row d-flex justify-content-center">
          <FormContacto esEmpresa={false} class={"col col-md-9"} />
        </Row>
      </>
    );
  }
}
