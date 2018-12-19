
import React, { Component } from 'react';
import { Row, Col, UncontrolledCarousel } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';
import * as FontAwesome from 'react-icons/fa';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import "../styles/style.css";
import "../styles/carousel.css";

export default class Consumidores extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
       
        return (
            <div style={{ position: 'relative' }}>
                <img src={'/img/consumidores-img.jpg'} style={{ width: "100%", padding: '0' }} />
                <div className="carousel-text-fixed">
                    <h2 style={{ fontSize: '6vw' }}>Un Valor Agregado</h2>
                    <br />
                    <br />
                    <br />
                    <h6 style={{ fontSize: '2vw' }}>Somos la certificadora Kosher líder en el mercado alimenticio de Argentina. <br /><br />
                        Nos dedicamos a supervisar y certificar alimentos Kosher en Argentina y en el resto de Latinoamérica</h6>
                </div>
            </div>
        );
    }
}