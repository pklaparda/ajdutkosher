import React, { Component } from "react";
import MainNavBar from "./components/main-navbar";
import MyFooter from "./components/footer";

import Empresas from "./components/empresas";
import Consumidores from "./components/consumidores";

import Categorias from "./components/categorias";
import Productos from "./components/productos";
import Codigos from "./components/codigos";
import Marcas from "./components/marcas";
import Home from "./components/home";
import ListaKosher from "./components/lista-kosher";
import Caterings from "./components/consumidores/caterings";
import Panaderias from "./components/consumidores/panaderias";
import Restaurantes from "./components/consumidores/restaurantes";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  routes = [
    { path: "/", component: Home, exact: true },
    { path: "/empresas/", component: Empresas },
    { path: "/consumidores/", component: Consumidores, exact: true },
    { path: "/consumidores/listaKosher", component: ListaKosher, exact: true },
    { path: "/consumidores/panaderias", component: Panaderias, exact: true },
    { path: "/consumidores/caterings", component: Caterings, exact: true },
    { path: "/consumidores/restaurantes", component: Restaurantes, exact: true }
  ];

  render() {
    return (
      <Router>
        <div className="App">
          <MainNavBar />
          <div className="container-fluid">
            {this.routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </div>
          <MyFooter />
        </div>
      </Router>
    );
  }
}

export default App;
