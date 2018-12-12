import React, { Component } from 'react';
import MyNavBar from './components/navbar';
import MainNavBar from './components/main-navbar';
import MyFooter from './components/footer';

import Empresas from './components/empresas';

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
        <MainNavBar/>
        {/* <MyNavBar/> */}
        <div className="container-fluid">
          {/* <Route path="/" component={this} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/empresas/" component={Empresas} />
          <Route path="/categorias/" component={Categorias} />
          <Route path="/productos/" component={Productos} />
          <Route path="/codigos/" component={Codigos} />
          <Route path="/marcas/" component={Marcas} />
        </div>
        <MyFooter/>
      </div>
      </Router>
    );
  }
}

export default App;
