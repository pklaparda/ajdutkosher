import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class Categorias extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: []
        };
    }

    componentWillMount() {
        fetch('api/categoria/get.php')
            .then(data => data.json())
            .then(res => {
                this.setState({ categorias: res });
            });
    }

    render() {
        const trsCats = this.state.categorias.map((cat) => {
            return <tr>
                <th hidden scope="row">{cat.id}</th>
                <th>{cat.nombre}</th>
                <th>{cat.fechaBaja == null ? "activa" : "inactiva"}</th>
                <th>{cat.descripcion}</th>
            </tr>
        });

        return (
            <div>
                <h1>categorias</h1>
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