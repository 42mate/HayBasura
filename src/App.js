import React, { Component } from 'react';
import Map from './Map';
import NewPoint from './NewPoint';
import Header from './Header';
import Gallery from './Gallery';

import './App.css';

const mock = [
  {
    lat: 0,
    long: 0,
    photoUrl: 'http://kajsdfkjdf.com/aksjdf.jpg'
  },
  {
    lat: 1,
    long: 1,
    photoUrl: 'http://kajsdfkjdf.com/aksjdf.jpg'
  }
]

const createNewPoint = () => {
  console.log('Whasssaaaaaaa@');
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewPoint onNewPoint={createNewPoint} />
        <Map points={mock} />
        <Gallery />
      </div>
    );
  }
}

export default App;
