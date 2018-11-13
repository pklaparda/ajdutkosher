
import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class Marcas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marcas: []
        };
    }

    componentWillMount() {
        fetch('api/marca/get.php')
            .then(data => data.json())
            .then(res => {
                this.setState({ marcas: res });
            });
    }

    render() {
        const trsCats = this.state.marcas.map((cat) => {
            return <tr>
                <th hidden scope="row">{cat.id}</th>
                <th>{cat.nombre}</th>
                <th>{cat.fechaBaja == null ? "activa" : "inactiva"}</th>
                <th>{cat.descripcion}</th>
            </tr>
        });

        return (
            <div>
                <h1>marcas</h1>
                <Table>
                    <thead>
                        <tr>
                            <th hidden>Id</th>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trsCats}
                    </tbody>
                </Table>
            </div>
        );
    }
}