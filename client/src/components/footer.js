import React from "react";
import { Row, Col, Container } from "reactstrap";
import * as FontAwesome from "react-icons/fa";
import Iframe from "react-iframe";

const itemContact = { color: "#fff", paddingLeft: ".5rem" };

export default class MyNFooter extends React.Component {
  render() {
    return (
      <footer
        style={{
          padding: "15px",
          color: "white",
          background: "#262626",
          textAlign: "left"
        }}
      >
        <Container>
          <Row>
            <Col xs="12" sm="6" className="alignMiddle">
              <div>
                <FontAwesome.FaHome />{" "}
                <a href="https://goo.gl/maps/FJaZuxLWnq22" style={itemContact}>
                  Moldes 2449, Capital Federal, Argentina
                </a>{" "}
              </div>
              <div>
                <FontAwesome.FaPhone />{" "}
                <span style={itemContact}>(+5411) 4787-6712</span>{" "}
              </div>
              <div>
                <FontAwesome.FaWhatsapp />{" "}
                <span style={itemContact}>(+54911) 2492-2744</span>{" "}
              </div>
              <div>
                <FontAwesome.FaEnvelope />{" "}
                <a href="mailto:info@kosher.org.ar" style={itemContact}>
                  info@kosher.org.ar
                </a>{" "}
              </div>
              <div>
                <FontAwesome.FaGlobe />{" "}
                <a href="http://www.kosher.org.ar" style={itemContact}>
                  www.kosher.org.ar
                </a>{" "}
              </div>
              <div>
                <FontAwesome.FaFacebook />{" "}
                <a href="https://www.facebook.com/AjdutK/" style={itemContact}>
                  AjdutK
                </a>{" "}
              </div>
              <div>
                <FontAwesome.FaInstagram />{" "}
                <a
                  href="https://www.instagram.com/ajdutkosher/"
                  style={itemContact}
                >
                  {" "}
                  @ajdutkosher{" "}
                </a>
              </div>
            </Col>
            <Col xs="12" sm="6">
              <Iframe
                url="https://maps.google.com/maps?q=moldes%202449%2C%20capital%20federal%2C%20argentina&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen
              />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
