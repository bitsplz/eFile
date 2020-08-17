import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCWFTxzi-iXbLgMt7hpL3rtzKLAu5MP3qQ",
  authDomain: "efile-7809a.firebaseapp.com",
  databaseURL: "https://efile-7809a.firebaseio.com",
  projectId: "efile-7809a",
  storageBucket: "efile-7809a.appspot.com",
  messagingSenderId: "131232932015",
  appId: "1:131232932015:web:1206646c4c62125bd7745a",
  measurementId: "G-95P2FBBP7N"
};

export const createUserProfileDocument = async(userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef=firestore.doc(`user/${userAuth.uid}`);
  const snapshot= await userRef.get();
  
  if(!snapshot.exists){
    const {displayName, email}= userAuth;
    const createdAt= new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error){
      console.log('error cretaing user', error.message);
    }
  }
  return userRef;
}


// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
