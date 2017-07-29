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
    this.props.onNewPoint(data);
    this.setState({showForm: false});
  }

  showForm = this.showForm.bind(this);
  submitForm = this.submitForm.bind(this);

  render() {
    return (
      <div>
        <button onClick={this.showForm} >Reportar basura</button>
        { (this.state.showForm) ? <PointForm onSubmit={this.submitForm} /> : null}
      </div>
    );
  }
}

export default NewPoint;
