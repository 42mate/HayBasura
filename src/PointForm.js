import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class PointForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      files: [],
    }
  }
  onDrop(files){
    this.setState({files: files});
  }
  submit(){
    this.props.onSubmit({files: this.state.files, comment: this.state.comment, action: 'submit'});
  }
  cancel(){
    this.props.onCancel();
  }
  onChange(field, comment) {
    this.setState({comment: comment.target.value});
  }
  render() {
    return (
      <div className="pointForm">
        <label htmlFor="comment">
          ¿Algún comentario?
        </label>
        <br />
          <textarea onChange={ this.onChange.bind(this, 'comment')} cols="5" rows="5"/>
          <div className="dropZoneContainer">
            <Dropzone onDrop={this.onDrop.bind(this)} className="dropzone">
              <p>Subir o tomar foto</p>
            </Dropzone>
          </div>
        <button className="btn cancel" type="button" onClick={this.cancel.bind(this)}>Cancelar</button>
        <button className="btn save" type="submit" onClick={this.submit.bind(this)}>Reportar</button>
      </div>
    );
  }
}

export default PointForm;
