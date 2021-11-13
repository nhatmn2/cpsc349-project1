import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjdixeFVbYX93w7NchfWhngtwg7Hdf9HM",
  authDomain: "react-crud-51ad9.firebaseapp.com",
  projectId: "react-crud-51ad9",
  storageBucket: "react-crud-51ad9.appspot.com",
  messagingSenderId: "829156729192",
  appId: "1:829156729192:web:19bd7913b447b70acc36dd",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
