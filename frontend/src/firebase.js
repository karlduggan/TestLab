


// Import the functions you need from the SDKs you need
import config from './config'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
//import { doc, setDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const fbConfig = config.firebase

const firebaseConfig = {
  apiKey: fbConfig.apiKey,
  authDomain: fbConfig.authDomain,
  projectId: fbConfig.projectId,
  storageBucket: fbConfig.storageBucket,
  messagingSenderId: fbConfig.measurementId,
  appId: fbConfig.appId,
  measurementId: fbConfig.measurementId
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const usersCollection = collection(db, 'users')
const bugsCollection = collection(db, 'bugs')

// Helper function for the CRUD application
// CREATE User
export const createUser = user => {
    addDoc(usersCollection, user)
}

// GET User
export const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        var data = {
            'id': doc.id,
            'name': doc.data().name,
            'email': doc.data().email
        }
        console.log(data);
        return data
      });
}
// UPDATE User
//export const updateUser = (id, user) => {
//    return usersCollection.doc(id).update(user)
//}
// DELETE User 
//export const deleteUser = id => {
//    return usersCollection.doc(id).delete()
//}


// CREATE Bug
export const createBug = bug => {
    addDoc(bugsCollection, bug)
}
