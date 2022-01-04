import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDoTVc6LyuQ-C7xpm6xqZU_Vj710IrejXk",
  authDomain: "e-comerce-react-db.firebaseapp.com",
  projectId: "e-comerce-react-db",
  storageBucket: "e-comerce-react-db.appspot.com",
  messagingSenderId: "121119758229",
  appId: "1:121119758229:web:ced87f2f18031242ec489c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
