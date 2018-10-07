import React, { Component } from 'react';
import {Container} from 'reactstrap';
import MyNavBar from './components/navbar';
import Categorias from './components/categorias';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar/>
          <Container className="pt-3">
          <Categorias/>
        </Container>
      </div>
    );
  }
}

export default App;
