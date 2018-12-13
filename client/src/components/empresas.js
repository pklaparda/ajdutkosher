
import React, { Component } from 'react';
import { Row, Col, UncontrolledCarousel, Jumbotron } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';

export default class Empresas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marcas: []
        };
    }


    render() {
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
            <div>
                <UncontrolledCarousel items={items} className="row" />
                <Row style={{ padding: '15px' }}>
                    <Col style={{ padding: '0' }}>
                        <img src={'/img/qek-super.jpg'} style={{ width: "100%", padding: '0' }} />
                    </Col>
                    <Col >
                        ¿Qué es Kosher? <br />
                        El kosher es blah blah blah
                    </Col>
                </Row>
                <Row>
                    <Parallax
                        blur={0}
                        bgImage={'/img/qek.jpg'}
                        bgImageAlt="the cat"
                        strength={200}
                        style={{ width:'100%' }}
                    >
                        
                        <div style={{ height:'200px', color:'white' }} >
                            UNA VENTAJA COMPETITIVA
                            <br/>
                            DELCARACION DE CONFIDENCIALIDAD
                        </div>
                    </Parallax>
                </Row>
                <Row>
                    Slider de empresas que certifican
                </Row>
                <Row style={{color: 'white', backgroundImage: 'url(/img/skill-back.jpg)'}}>
                    Sobre nosotros!! <br/>
                    El amplio servicios de certificaciones Kosher que ofrecemos nos permite contar con empresas de mas diversos rubros alimenticios
                </Row>
                <Row>
                    Formulario de contacto
                </Row>
            </div>
        );
    }
}