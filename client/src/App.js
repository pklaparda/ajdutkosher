import React, { Component } from 'react';
import {Container} from 'reactstrap';
import MyNavBar from './components/navbar';
import { Jumbotron, Button } from 'reactstrap';

import Categorias from './components/categorias';
import Productos from './components/productos';
import Codigos from './components/codigos';
import Marcas from './components/marcas';
import Home from './components/home';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <MyNavBar/>
        <Container className="pt-3">
          {/* <Route path="/" component={this} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/categorias/" component={Categorias} />
          <Route path="/productos/" component={Productos} />
          <Route path="/codigos/" component={Codigos} />
          <Route path="/marcas/" component={Marcas} />
        </Container>
      </div>
      </Router>
    );
  }
}

export default App;
