import React from 'react';
import {
  Row, Col, Container
} from 'reactstrap';
import * as FontAwesome from 'react-icons/fa';
import Iframe from 'react-iframe'

import { Link } from 'react-router-dom';

export default class MyNFooter extends React.Component {
  render() {
    return (
      <footer style={{ padding: '15px', color: 'white', background: '#262626', textAlign: 'left' }}>
        <Container>
          <Row>
            <Col>
              <FontAwesome.FaHome />  Moldes 2449, Capital Federal, Argentina <br />
              <FontAwesome.FaPhone />  (+5411) 4787-6712 <br />
              <FontAwesome.FaWhatsapp />  (+54911) 2492-2744 <br />
              <FontAwesome.FaEnvelope />  info@kosher.org.ar <br />
              <FontAwesome.FaGlobe />  www.kosher.org.ar <br />
            </Col>
            <Col>
              <Iframe url="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJ2XSxsyq0vJURrRcHjx6wEBc"
                width="100%"
                height="100%"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}