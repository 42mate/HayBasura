import React, { Component } from 'react';
import Map from './Map';

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
  console.log('Whasssaaaaaaa');
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map points={mock} onNewPoint={createNewPoint} />
      </div>
    );
  }
}

export default App;
