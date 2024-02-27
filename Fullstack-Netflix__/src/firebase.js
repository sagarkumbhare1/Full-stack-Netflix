import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkZ87wOMetgPkSWTwc8eWmzJF347hm5hw",
  authDomain: "netflix-clone-6f961.firebaseapp.com",
  projectId: "netflix-clone-6f961",
  storageBucket: "netflix-clone-6f961.appspot.com",
  messagingSenderId: "278308373849",
  appId: "1:278308373849:web:cc794b1fd437c16e193848",
  measurementId: "G-B14644705R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
