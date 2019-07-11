import firebase from './Firebase';
import { searchMovieIMDB, processMovie } from './searchMovieAPI';

// fetch IMDB ID of all saved movies
export const getSavedMovies = () => {
  let results = [];
  firebase
    .firestore()
    .collection('users')
    .doc(`${firebase.auth().currentUser.uid}`)
    .onSnapshot(
      function(doc) {
        results = doc.data().savedMovies;
        console.log(results);
      },
      error => {
        throw Error(error);
      },
      () => {
        console.log(`Results: ${results}`);
        if (results) {
          results.map(movie => console.log(movie));
        }
        return results;
      }
    );
};
