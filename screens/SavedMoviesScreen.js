import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ScrollViewMovies from '../ScrollViewMovies';

export default class SavedMoviesScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Saved Movies',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#9932CC'
    }
  };
  render() {
    return <View />;
  }
}
