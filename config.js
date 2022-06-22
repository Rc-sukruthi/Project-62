import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwhbBLIH2W0oQjkQA1Nv7T0o5PiSI4bTk",
  authDomain: "project-60-d4331.firebaseapp.com",
  databaseURL: "https://project-60-d4331-default-rtdb.firebaseio.com",
  projectId: "project-60-d4331",
  storageBucket: "project-60-d4331.appspot.com",
  messagingSenderId: "312500849459",
  appId: "1:312500849459:web:f3e24ae928d0c923d44c46"
};

//initialize your database
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
  
 

  