import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="right">
          <div className="top">Hay Basura</div>
          <div className="message">
            Haga click en el mapa para indicar donde hay un punto
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
