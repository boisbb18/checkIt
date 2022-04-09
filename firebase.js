// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// import firebase from '@firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDAxE_V2-J9JupxIAJY-gPgoyMmIWl9jUg',
  authDomain: 'checkit-6254c.firebaseapp.com',
  projectId: 'checkit-6254c',
  storageBucket: 'checkit-6254c.appspot.com',
  messagingSenderId: '638718772719',
  appId: '1:638718772719:web:3489698a228cf3ae3fe21a',
  measurementId: 'G-LMGC06XJ0Y',
  // databaseURL: 'https://checkit-6254c-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
