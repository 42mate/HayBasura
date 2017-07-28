import React, { Component } from 'react';

class NewPoint extends Component {
  render() {
    return (
      <button onClick={this.props.onNewPoint}>
        New Point!
      </button>
    );
  }
}

export default NewPoint;
