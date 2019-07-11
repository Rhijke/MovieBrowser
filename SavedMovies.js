import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScrollViewMovies from './ScrollViewMovies';
import firebase from './Firebase';
import { searchMovieIMDB, processMovie } from './searchMovieAPI';
export default class SearchMovieForm extends React.Component {
  state = {
    results: []
  };
  componentWillMount() {
    this.getSavedMovies();
  }
  processSave = async movie => {
    return await searchMovieIMDB(movie);
  };
  getSavedMovies = async () => {
    let results = [];
    firebase
      .firestore()
      .collection('users')
      .doc(`${firebase.auth().currentUser.uid}`)
      .onSnapshot(doc => {
        results = doc.data().savedMovies;
        console.log(results);
        for (let i = 0; i < results.length; i++) {
          console.log(results[i]);
          results[i] = processMovie(this.processSave(results[i]));
          console.log(results[i]);
        }

        this.setState({
          results
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.results.length > 0 ? (
          <ScrollViewMovies
            movies={this.state.results}
            onSelectMovie={this.props.handleSelectMovie}
          />
        ) : (
          <Text style={{ color: 'darkorchid', textAlign: 'center' }}>
            Add movies.
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
