import key from './config';
import firebase from './Firebase';
import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export const saveMovie = imdb => {
  if (firebase.auth().currentUser) {
    let userID = firebase.auth().currentUser.uid;
    let dbCollectionUser = firebase
      .firestore()
      .collection('users')
      .doc(`${userID}`);
    dbCollectionUser
      .update({
        savedMovies: firebase.firestore.FieldValue.arrayUnion(imdb)
      })
      .then(function() {
        console.log('Document successfully updated!');
      });
  }
};
