import React, { Component } from 'react';
import Nav from './contents/nav';
import Carrusel from './contents/carrusel';
import Section from './contents/section';
import Footer from './contents/footer';

class App extends Component {
  render() {
    return (
      <div className='Home'>
        <Nav />
        <Carrusel />
        <Section />                         
        <Footer />
      </div>
    );
  }
}

export default App;
