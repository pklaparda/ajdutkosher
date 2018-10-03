import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: []
    };
  }
  
  componentWillMount() {
    fetch('api/categoria/get.php')
    .then(data=>data.json())
    .then(res=>{
      this.setState({categorias:res});
    });
  }
  
  render() {
    const trsCats = this.state.categorias.map((cat) => {
          return <tr>
            <th hidden scope="row">{cat.id}</th>
            <th>{cat.nombre}</th>
            <th>{cat.fechaBaja==null?"activa":"inactiva"}</th>
            <th>{cat.descripcion}</th>
          </tr>
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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

export default App;
