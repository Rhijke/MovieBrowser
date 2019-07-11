import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SavedMovies from '../SavedMovies';

export default class SavedMoviesScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Saved Movies',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#9932CC'
    }
  };
  handleSelectMovie = movie => {
    this.props.navigation.push('MovieDetails', movie);
  };
  render() {
    return <SavedMovies handleSelectMovie={this.handleSelectMovie} />;
  }
}
