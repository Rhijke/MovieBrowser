import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCM7nqiP7fIsuEAbTe13_DyD3Rb9NveJX0',
  authDomain: 'moviebrowser-bec79.firebaseapp.com',
  databaseURL: 'https://moviebrowser-bec79.firebaseio.com',
  projectId: 'moviebrowser-bec79',
  storageBucket: 'moviebrowser-bec79.appspot.com',
  messagingSenderId: '268555326444',
  appId: '1:268555326444:web:be549131c3d837c3'
};
firebase.initializeApp(config);
export default firebase;
