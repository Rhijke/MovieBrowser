import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from './Firebase';

export class GenerateIcon extends Component {
  state = {
    savedMovie: false
  };

  checkSavedMovie = imdb => {
    if (firebase.auth().currentUser) {
      let savedMovies = [];

      let userID = firebase.auth().currentUser.uid;
      let dbCollectionUser = firebase
        .firestore()
        .collection('users')
        .doc(`${userID}`)
        .get()
        .then(doc => {
          savedMovies = doc.data().savedMovies;
          if (savedMovies.includes(imdb)) {
            this.setState({
              savedMovie: true
            });
          }
        });
    }
  };

  componentWillMount() {
    console.log('will mount');
    this.checkSavedMovie(this.props.imdb);
  }

  render() {
    return (
      <Ionicons
        name={`md-star${this.state.savedMovie ? '' : '-outline'}`}
        size={25}
      />
    );
  }
}

export default GenerateIcon;
