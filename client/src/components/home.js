import React, { Component } from 'react';
import { Col, UncontrolledCarousel } from 'reactstrap';




export default class Home extends Component {
    constructor(props) {
        super(props);

    }

    // componentWillMount() {
    //     fetch('/api/categoria/get.php')
    //         .then(data => data.json())
    //         .then(res => {
    //             this.setState({ categorias: res });
    //         });
    // }

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

                <div className="row" align="center" style={{ paddingBottom: "15px" }}>
                    <Col>
                        <img src={'img/empresas-logo.jpg'} style={{ maxHeight: "150px", padding: '15px' }} />
                        <h6 style={{ color: '#0ab0d6', textAlign: 'center', fontSize: '15px', padding: '0px', margin:'0px' }}>Ingresar como</h6>
                        <h4 style={{ color: '#0ab0d6', textAlign: 'center', fontSize: '25px', padding: '0px', margin:'0px' }}>EMPRESAS</h4>
                        <h4 style={{ color: '#0ab0d6', textAlign: 'center', fontSize: '25px', padding: '0px', margin:'0px' }}>(CERTIFICACIÓN KOSHER)</h4>
                    </Col>
                    <Col>
                        <img src={'img/consumidor-logo.png'} style={{ maxHeight: "150px", padding: '15px' }} />
                        <h6 style={{ color: '#0ab0d6', textAlign: 'center', fontSize: '15px', padding: '0px', margin:'0px' }}>Ingresar como</h6>
                        <h4 style={{ color: '#0ab0d6', textAlign: 'center', fontSize: '25px', padding: '0px', margin:'0px' }}>CONSUMIDORES</h4>
                    </Col>
                </div>

                <UncontrolledCarousel items={items} className="row" />

                <div className="items-leading clearfix">
										<article classNAme="item leading-0 clearfix" itemprop="blogPost" itemscope="" itemtype="http://schema.org/BlogPosting">

											<div className="entry-header">

												<h2 itemprop="name">
													¿Que es Kosher? </h2>

											</div>

											Las normativas del Kashrut rigen tanto en el animal como en el proceso de producción de un producto
											alimenticio.<br/>
											Las carnes que son aptas para el consumo son aquellas que provienen de animales rumiantes (los que mastican
											su bolo alimenticio) y que tienen pezuñas partidas al medio. Las especies domésticas kosher son: vacuno,
											ovino y caprino. Dentro de los pescados que se encuentran permitidos son aquellos que tengan aletas y
											escamas y productos lácteos Todos los mariscos están vedados por las normas kosher. <br/><br/>

											<strong>Carnes</strong><br/>
											Los mamíferos y las aves , deben ser faenados (Shejitá) por un equipo especializado que lleva a cabo el acto
											mismo de carnear, como así también el control general minucioso de animal – en particular el estado de los
											pulmones en el caso de los mamíferos.<br/> <br/>

											<strong>Lácteos</strong> <br/>
											Sólo se permite la leche de los mamíferos permitidos. Según la costumbre de “Jalav Israel”, el ordeñe de las
											vacas, debe ser presenciado por un supervisor calificado.<br/> Asimismo, los productos derivados de la leche
											tales como el queso, manteca, dulce de leche, yogur, crema y demás subproductos requieren la presencia de un
											supervisor calificado que controle los equipos y maquinarias como también los insumos que se añadan en la
											elaboración.<br/><br/>

											<strong>Parve</strong><br/>
											Los alimentos Parve (son los que no contienen carne, ni contienen leche). En esta categoría entran los
											pescados, huevos, legumbres, cereales y demás vegetales.
											<br/><br/>
											<strong>Kosher LePesaj</strong><br/>
											Son aquellos que no contienen trigo, avena, cebada, centeno, espelta y son aptos para el consumo dentro de
											las Pascuas Judias.

										</article>
									</div>

            </div>

        );
    }
}