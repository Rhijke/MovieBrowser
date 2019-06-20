import React from 'react';
import SearchMovieForm from '../SearchMovieForm';

export default class SearchMovieScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Search Movie',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#9932CC'
    }
  };
  handleSelectMovie = movie => {
    this.props.navigation.push('MovieDetails', movie);
  };

  render() {
    return <SearchMovieForm handleSelectMovie={this.handleSelectMovie} />;
  }
}
