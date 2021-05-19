// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyB-uBhb45VtLyvbJtDpiyfEdh49dodnz6I',
	authDomain: 'clone-6238b.firebaseapp.com',
	projectId: 'clone-6238b',
	storageBucket: 'clone-6238b.appspot.com',
	messagingSenderId: '584942028422',
	appId: '1:584942028422:web:9e2a3ac5a40b72171e7307',
	measurementId: 'G-6Z1PWSWP7T',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
