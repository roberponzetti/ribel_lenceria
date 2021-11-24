import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCF7J2h_7NCKN-DCA_YN2FX8161ypTDwIY",
    authDomain: "ribel-lenceria-reactjs.firebaseapp.com",
    projectId: "ribel-lenceria-reactjs",
    storageBucket: "ribel-lenceria-reactjs.appspot.com",
    messagingSenderId: "46894415527",
    appId: "1:46894415527:web:d10896908c84ed63262582"
});

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)

export const auth = firebase.auth();

export const logout = () => auth.signOut();