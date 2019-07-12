import key from './config';
import firebase from './Firebase';
import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, Alert } from 'react-native';
export const saveMovie = imdb => {
  if (firebase.auth().currentUser) {
    let userID = firebase.auth().currentUser.uid;
    let dbCollectionUser = firebase
      .firestore()
      .collection('users')
      .doc(`${userID}`);

    firebase
      .firestore()
      .collection('users')
      .doc(`${userID}`)
      .get()
      .then(doc => {
        savedMovies = doc.data().savedMovies;
        if (!savedMovies.includes(imdb)) {
          dbCollectionUser
            .update({
              savedMovies: firebase.firestore.FieldValue.arrayUnion(imdb)
            })
            .then(function() {
              console.log('Document successfully updated!');
              Alert.alert('Saved!', 'Movie saved.');
            });
        } else {
          dbCollectionUser
            .update({
              savedMovies: firebase.firestore.FieldValue.arrayRemove(imdb)
            })
            .then(function() {
              console.log('Document successfully updated!');
              Alert.alert('Removed!', 'Movie removed.');
            });
        }
      });
  }
};
