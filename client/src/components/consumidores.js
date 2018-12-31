import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import { Parallax } from "react-parallax";
import FormContacto from "./form-contacto";
import * as FontAwesome from "react-icons/fa";

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
              className="pb-1"
              style={{
                fontSize: "1.5rem",
                color: "#262626",
                fontWeight: "bold"
              }}
            >
              Es fácil, rápido y accesible
            </h4>

            <div className="d-flex flex-wrap pb-3">
              <Button outline className="px-2 btn-custom mr-2">
                <a
                  href="https://itunes.apple.com/US/app/id731823009?mt=8"
                  target="_blank"
                  style={{ color: "#0ab0d6" }}
                >
                  <FontAwesome.FaApple />
                </a>
              </Button>
              <Button outline className="px-2 btn-custom mr-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.beatmobile.ak&hl=es"
                  target="_blank"
                  style={{ color: "#0ab0d6" }}
                >
                  <FontAwesome.FaAndroid />
                </a>
              </Button>

              <Link to={`${this.props.match.url}listaKosher/`}>
                <Button className="px-2 btn-custom">Ver lista online</Button>
              </Link>
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" className="px-5">
            <ButtonGroup className="d-flex justify-content-center pt-3">
              <Button onClick={e => this.switchToPlatform(IOS)}>iOS</Button>
              <Button onClick={e => this.switchToPlatform(Android)}>
                Android
              </Button>
            </ButtonGroup>
            <img
              src={this.state.platform === Android ? pathAndroid : pathIos}
              alt=""
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row>
          <Parallax
            blur={2}
            bgImage={"/img/services-banner.jpg"}
            bgImageAlt=""
            strength={200}
            style={{ width: "100%" }}
          >
            <Row
              style={{
                minHeight: "300px",
                color: "white"
              }}
              className="d-flex align-items-center"
            >
              <Col
                xs="12"
                sm="12"
                md="12"
                className="px-5 pt-4 pb-2 d-flex flex-column justify-content-center align-items-center text-center"
              >
                <h1>Establecimientos certificados</h1>
                <p className="m-0">
                  Conocé los Establecimientos que cuentan con nuestra
                  supervisión.
                </p>
              </Col>

              <Col
                xs="12"
                sm="4"
                className="px-5 py-2 d-flex align-items-center justify-content-center"
              >
                <Link to={`${this.props.match.url}establecimientos/`}>
                  <Button className="btn-custom-reverse">Locales</Button>
                </Link>
              </Col>
              <Col
                xs="12"
                sm="4"
                className="px-5 py-2 d-flex align-items-center justify-content-center"
              >
                <Link to={`${this.props.match.url}establecimientos/`}>
                  <Button className="btn-custom-reverse">Heladerías</Button>
                </Link>
              </Col>
              <Col
                xs="12"
                sm="4"
                className="px-5 py-2 d-flex align-items-center justify-content-center"
              >
                <Link to={`${this.props.match.url}establecimientos/`}>
                  <Button className="btn-custom-reverse">Catering</Button>
                </Link>
              </Col>
            </Row>
          </Parallax>
        </Row>
        <Row className="p-5 row d-flex justify-content-center">
          <FormContacto esEmpresa={false} class={"col col-md-9"} />
        </Row>
      </>
    );
  }
}
