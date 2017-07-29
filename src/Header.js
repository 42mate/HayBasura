import React, { Component } from 'react';
import NewPoint from './NewPoint';
import logo from './logo.svg';

const createNewPoint = () => {
  console.log('Whasssaaaaaaa@');
};

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="left">
          <div className="top">Hay Basura</div>
          <div className="message">
            Haga click en el mapa para indicar donde hay un punto
          </div>
        </div>
        <div className="left">
          { this.props.showButton ? <NewPoint onNewPoint={createNewPoint} /> : null }
        </div>
      </div>
    );
  }
}
export default Header;
