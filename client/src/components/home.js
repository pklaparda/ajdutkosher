import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';

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
        return (
                <Parallax
            blur={0}
            bgImage={'img/ppal.jpg'}
            bgImageAlt="the cat"
            strength={200}
            bgWidth= '100%'
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '200px'} } />
        </Parallax>


        );
    }
}