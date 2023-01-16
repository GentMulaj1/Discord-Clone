import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYiL9Mplz-zIEwkVHB95ERHUK0TJ7v7ck",
    authDomain: "discord-clone-gm.firebaseapp.com",
    projectId: "discord-clone-gm",
    storageBucket: "discord-clone-gm.appspot.com",
    messagingSenderId: "909157610456",
    appId: "1:909157610456:web:819056ddab50fe6486b8ad",
    measurementId: "G-10599TWZYN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;