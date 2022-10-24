


// Import the functions you need from the SDKs you need
import config from './config'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore'
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
    try{
        addDoc(usersCollection, user)
    }
    catch(error){
        console.log(error)
    }
    
}

// GET User
export const getAllUsers = async () => {
    try{
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var data = {
                'id': doc.id,
                'name': doc.data().name,
                'email': doc.data().email
            }
            console.log(data)
            return data
        });
    }
    catch(error){
        console.log(error)
    }
}

// GET User by ID 
export const getUserByID = async id => {
    try {
        const docRef = doc(db, 'users' , id)
        const docSnap = await getDoc(docRef)
        console.log(docSnap.data())
    }
    catch(error){
        console.log(error)
    }
}

// UPDATE User
export const updateUser = async (id, user) => {
    const docRef = doc(db, 'users' , id)
    await updateDoc(docRef, user)
}

// DELETE User 
export const deleteUserByID = async id => {
    try{
        await deleteDoc(doc(db, 'users', id))
    }
    catch(error){
        console.log(error)
    }
}   

// CREATE Bug
export const createBug = bug => {
    addDoc(bugsCollection, bug)
}
