import React, { Component } from 'react';
import NewPoint from './NewPoint';

class Map extends Component {
  render() {
    return (
      <div>
        Mapa!
        <NewPoint onNewPoint={this.props.onNewPoint} />
      </div>
    );
  }
}

export default Map;
