import React, { Component } from 'react';
import PointForm from './PointForm';

class NewPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
  }
  showForm() {
    this.setState({showForm: true});
  }
  submitForm(data) {
    console.log(data);
    this.setState({showForm: false});
  }
  render() {
    return (
      <div>
        <button onClick={this.showForm.bind(this)} >click me</button>
        { (this.state.showForm) ? <PointForm onSubmit={this.submitForm.bind(this)} /> : null}
      </div>
    );
  }
}

export default NewPoint;
