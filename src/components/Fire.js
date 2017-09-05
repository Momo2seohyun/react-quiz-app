import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCzD4qwgCQ8DW1aqj9F3WpMESDYBz6Si9w",
  authDomain: "quiz-react-app.firebaseapp.com",
  databaseURL: "https://quiz-react-app.firebaseio.com",
  projectId: "quiz-react-app",
  storageBucket: "quiz-react-app.appspot.com",
  messagingSenderId: "425600927470"
};

var fire = firebase.initializeApp(config);

export default fire;