import React, { Component } from 'react';
import Map from './Map';
import Header from './Header';
import Gallery from './Gallery';
import firebase from 'firebase';
import './App.css';

const config = {
  apiKey: "AIzaSyBqTlsuEbZjVFZHqj210WNaekKffMiF-5Q",
  authDomain: "haybasura-1501268339245.firebaseapp.com",
  databaseURL: "https://haybasura-1501268339245.firebaseio.com",
  projectId: "haybasura-1501268339245",
  storageBucket: "",
  messagingSenderId: "599927924989"
};
firebase.initializeApp(config);


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
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuPoint: {
        lat: null,
        lng: null,
      },
      showButton: false
    };
  }

  showMenu = this.showMenu.bind(this);
  submitPoint = this.submitPoint.bind(this);

  showMenu(point) {
    this.setState({
      menuPoint: point,
      showButton: true
    });
  }

  submitPoint(data) {
    console.log(data, this.state);
    var self = this;
    // firebase.database().ref('points').push({
    //   lat: self.state.menuPoint.lat,
    //   lng: self.state.menuPoint.long,
    //   msg: data.comment,
    //   // foto: url,
    //   created: Date.now(),
    // });
    firebase.storage()
      .ref('images')
      .child(data.files[0].name)
      .getDownloadURL()
      .then(
        url => {
          firebase.database().ref('points').push({
            lat: self.state.menuPoint.lat,
            lng: self.state.menuPoint.lng,
            msg: data.comment,
            foto: url,
            created: Date.now(),
          });
        }
      );
  }

  render() {
    return (
      <div className="App" style={{ height: `100%` }}>
        <Header showButton={this.state.showButton} onSubmitPoint={this.submitPoint}/>
        <Map points={mock} onClick={this.showMenu } />
        <Gallery />
      </div>
    );
  }
}

export default App;
