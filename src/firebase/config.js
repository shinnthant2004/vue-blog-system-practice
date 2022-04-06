import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCerW8lg42motRdBTYEYrqCyf7gHicuI28",
    authDomain: "vue-projects-48aa6.firebaseapp.com",
    projectId: "vue-projects-48aa6",
    storageBucket: "vue-projects-48aa6.appspot.com",
    messagingSenderId: "270787723215",
    appId: "1:270787723215:web:5c4b5c56d51c0907b79cba"
  };
  firebase.initializeApp(firebaseConfig);

  let db=firebase.firestore();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp

  export {db,timestamp}