import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyCc9-bu9XR0jdCK9jTL9c-aRbQOZugXhy8",
    authDomain: "task-manager-react-744c3.firebaseapp.com",
    databaseURL: "https://task-manager-react-744c3-default-rtdb.firebaseio.com",
    projectId: "task-manager-react-744c3",
    storageBucket: "task-manager-react-744c3.appspot.com",
    messagingSenderId: "58085709971",
    appId: "1:58085709971:web:6fa7ecf70fc168eece5566"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Get a list of cities from your database
export async function getTodos(db: any) {
  const todos = collection(db, 'todos')
  const quizSnapshot = await getDocs(todos)
  const quizList = quizSnapshot.docs.map(doc => doc.data())
  return quizList
}