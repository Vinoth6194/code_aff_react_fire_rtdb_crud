import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCF0TuPYBkdVH2cpqLAt2RhTofyxaYEuDs",
  authDomain: "code-aff-react-fire-crud.firebaseapp.com",
  databaseURL: "https://code-aff-react-fire-crud-default-rtdb.firebaseio.com",
  projectId: "code-aff-react-fire-crud",
  storageBucket: "code-aff-react-fire-crud.appspot.com",
  messagingSenderId: "913008262645",
  appId: "1:913008262645:web:a49e0c0a9296747dbf74bc",
  measurementId: "G-J6CJFB7YF5",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
