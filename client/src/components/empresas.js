
import React, { Component } from 'react';
import { Row, Col, UncontrolledCarousel } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';
import * as FontAwesome from 'react-icons/fa';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import "../styles/style.css";
import "../styles/carousel.css";

export default class Empresas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marcas: []
        };
        this.onVisibilityChange = this.onVisibilityChange.bind(this); // Bind for appropriate 'this' context

    }

    state = {
        didViewCountUp: false
    };


    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    }

    render() {
        const style = {
            componentName: {},
            col: {},
            countup: {},
        };

        const controls = false;
        const indicators = false;
        const autoPlay = true;
        const items = [
            {
                src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                altText: 'Slide 1',
                caption: 'Slide 1',
                header: 'Slide 1 Header'
            },
            {
                src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                altText: 'Slide 2',
                caption: 'Slide 2',
                header: 'Slide 2 Header'
            },
            {
                src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                altText: 'Slide 3',
                caption: 'Slide 3',
                header: 'Slide 3 Header'
            }
        ];



        return (
            <div style={{ position: 'relative' }}>
                <UncontrolledCarousel controls={controls} items={items} indicators={indicators} autoPlay={autoPlay} className="row" />
                <div className="carousel-text-fixed">
                    <h2 style={{ fontSize: '6vw' }}>Un Valor Agregado</h2>
                    <br />
                    <br />
                    <br />
                    <h6 style={{ fontSize: '2vw' }}>Somos la certificadora Kosher líder en el mercado alimenticio de Argentina. <br /><br />
                        Nos dedicamos a supervisar y certificar alimentos Kosher en Argentina y en el resto de Latinoamérica</h6>
                </div>
                <Row style={{ padding: '15px' }}>
                    <Col xs="12" sm="6" style={{ padding: '0' }}>
                        <img src={'/img/qek-super.jpg'} style={{ width: "100%", padding: '0' }} />
                    </Col>
                    <Col xs="12" sm="6">
                        <div className="entry-header">
                            <h2 itemprop="name">¿Que es Kosher? </h2>
                        </div>
                        <br />
                        La palabra Kosher significa apto o adecuado en idioma hebreo. Los productos kosher son aquellos de acuerdo a normas dietéticas judías, las cuales las hace permisibles al consumo.
                        <br />

                    </Col>
                </Row>
                <Row>
                    <Parallax
                        blur={2}
                        bgImage={'/img/qek.jpg'}
                        bgImageAlt="the cat"
                        strength={200}
                        style={{ width: '100%' }}
                    >

                        <Row style={{ minHeight: '400px', color: 'white', padding: "15px", verticalAlign:'middle' }} >
                            <Col xs="12" sm="6" >
                                <div className="icon-box-circle">
                                    <FontAwesome.FaChartLine className="features-icon"/>
                                </div>
                                <div className="features-title">
                                    <h3>UNA VENTAJA COMPETITIVA</h3>
                                </div>
                                <div className="features-description">
                                    Garantiza al consumidor integridad, naturaleza y calidad. El sello Kosher no solo indica que la elaboración del producto se rige bajo las normas de la religión judía, sino también la estricta limpieza y saneamiento de los equipos de producción.
                            </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <div className="icon-box-circle">
                                    <FontAwesome.FaShieldAlt className="features-icon"/>
                                </div>
                                <div className="features-title">
                                    <h3>DECLARACIÓN DE CONFIDENCIALIDAD</h3>
                                </div>
                                <div className="features-description">
                                    Cumplimos con los más estrictos niveles de confidencialidad. Somos extremadamente sensibles a las necesidades de la compañias y respetamos las necesidad de la información y secretos comerciales de los fabricantes.
                            </div>

                            </Col>
                        </Row>
                    </Parallax>
                </Row>
                <Row>
                    Slider de empresas que certifican
                </Row>
                <Row style={{ color: 'white', backgroundImage: 'url(/img/skill-back.jpg)', minHeight: '250px', textAlign:'center', verticalAlign:'middle', padding:'15px' }}>
                    <Col md="12">
                        <h3>Sobre Nosotros</h3>
                        <h6>El amplio servicios de certificaciones Kosher que ofrecemos nos permite contar con empresas de mas diversos rubros alimenticios</h6>
                        <br/>
                    </Col>

                    <Col xs="12" sm="4" className="align-text-bottom">
                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                            <CountUp className={style.countup} start={0} end={this.state.didViewCountUp ? 50 : 0} duration={3} className="counter"/>
                        </VisibilitySensor>
                        <h6>Años en el Mercado</h6>
                    </Col>
                    <Col xs="12" sm="4" className="counter-box">
                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                            <CountUp className={style.countup} start={0} end={this.state.didViewCountUp ? 250 : 0} duration={3} className="counter"/>
                        </VisibilitySensor>
                        <h6>Productos en Góldolas</h6>
                    </Col>
                    <Col xs="12" sm="4" className="counter-box">
                        <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                            <CountUp className={style.countup} start={0} end={this.state.didViewCountUp ? 1500 : 0} duration={3} className="counter"/>
                        </VisibilitySensor>
                        <h6>Establecimientos Certificados</h6>
                    </Col>
                </Row>
                <Row>
                    Formulario de contacto
                </Row>
            </div>
        );
    }
}