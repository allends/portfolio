// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
};

let app = null
let analytics = null
let storage = null

const initialize = () => {
  app = initializeApp(firebaseConfig)
  analytics = getAnalytics(app)
  storage = getStorage(app)
}

export { initialize, app, analytics, storage}

