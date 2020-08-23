import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDDEGPS6uieGjpAIre6zDNQmS5f-GnmKXI',
  authDomain: 'clientfiling-auth.firebaseapp.com',
  databaseURL: 'https://clientfiling-auth.firebaseio.com',
  projectId: 'clientfiling-auth',
  storageBucket: 'clientfiling-auth.appspot.com',
  messagingSenderId: '1035946938823',
  appId: '1:1035946938823:web:72040a6dec3d7c30bb49e2',
  measurementId: 'G-JMBSD2REKZ',
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;
