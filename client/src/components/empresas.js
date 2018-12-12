
import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class Empresas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marcas: []
        };
    }

    
    render() {
        return (
            <div>
                <h1>Empresas</h1>
            </div>
        );
    }
}