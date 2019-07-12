import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScrollViewMovies from './ScrollViewMovies';
import firebase from './Firebase';
import { fetchMoviesID } from './searchMovieAPI';
export default class SearchMovieForm extends React.Component {
  state = {
    savedIMDB: [],
    movieDetails: []
  };
  componentWillMount() {
    this.getSavedMovies();
  }
  // componentDidUpdate() {
  //   this.setState(prevState => ({
  //     movieDetails: fetchMoviesID(prevState.savedIMDB)
  //   }));
  // }
  getMovieDetails = async results => {
    let movies = await fetchMoviesID(results);
    this.setState({
      movieDetails: movies
    });
  };
  getSavedMovies = async () => {
    let results = [];
    firebase
      .firestore()
      .collection('users')
      .doc(`${firebase.auth().currentUser.uid}`)
      .onSnapshot(doc => {
        results = doc.data().savedMovies;
        this.getMovieDetails(results);
        this.setState({
          savedIMDB: results
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.movieDetails.length > 0 ? (
          <ScrollViewMovies
            movies={this.state.movieDetails}
            onSelectMovie={this.props.handleSelectMovie}
          />
        ) : (
          <Text
            style={{
              color: 'darkorchid',
              textAlign: 'center',
              alignSelf: 'center',
              fontSize: 20
            }}
          >
            Add movies.
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
