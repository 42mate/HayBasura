import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class PointForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: '',
      files: [],
    }
  }
  onDrop(files){
    this.setState({files: files});
  }
  submit(){
    this.props.onSubmit({files: this.state.files, comments: this.state.comments});
  }
  onChange(field, comment) {
    this.setState({comments: comment.target.value});
  }
  render() {
    return (
      <div>
        <textarea onChange={ this.onChange.bind(this, 'comment')} />
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <p>Try dropping some files here, or click to select files to upload.</p>
        </Dropzone>
        <button type="submit" onClick={this.submit.bind(this)}>Add</button>
      </div>
    );
  }
}

export default PointForm;
