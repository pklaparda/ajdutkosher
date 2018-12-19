import React from 'react';
import {
  Row, Col, Container
} from 'reactstrap';
import * as FontAwesome from 'react-icons/fa';
import Iframe from 'react-iframe'

export default class MyNFooter extends React.Component {
  render() {
    return (
      <footer style={{ padding: '15px', color: 'white', background: '#262626', textAlign: 'left' }}>
        <Container>
          <Row>
            <Col xs="12" sm="6" className="alignMiddle" >
              <FontAwesome.FaHome />  <a href="https://goo.gl/maps/FJaZuxLWnq22" style={{color:'white'}}>Moldes 2449, Capital Federal, Argentina</a> <br/>
              <FontAwesome.FaPhone />  (+5411) 4787-6712 <br/>
              <FontAwesome.FaWhatsapp />  (+54911) 2492-2744 <br/>
              <FontAwesome.FaEnvelope />  <a href="mailto:info@kosher.org.ar" style={{color:'white'}}>info@kosher.org.ar</a> <br/>
              <FontAwesome.FaGlobe />  <a href="http://www.kosher.org.ar" style={{color:'white'}}>www.kosher.org.ar</a> <br/>
              <FontAwesome.FaFacebook />  <a href="https://www.facebook.com/AjdutK/" style={{color:'white'}}>AjdutK</a> <br/>
              <FontAwesome.FaInstagram />  <a href="https://www.instagram.com/ajdutkosher/" style={{color:'white'}}> @ajdutkosher </a> <br/>

            </Col>
            <Col xs="12" sm="6">
              <Iframe url="https://maps.google.com/maps?q=moldes%202449%2C%20capital%20federal%2C%20argentina&t=&z=17&ie=UTF8&iwloc=&output=embed"
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