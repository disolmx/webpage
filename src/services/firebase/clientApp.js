import firebase from '@firebase/app';
import '@firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey:            process.env.FIREBASE_API_KEY,
  authDomain:        process.env.FIREBASE_AUTH_DOMAIN,  
  databaseURL:       process.env.FIREBASE_DATABASE_URL,
  projectId:         process.env.FIREBASE_PROJECT_ID,
  storageBucket:     process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.FIREBASE_APP_ID,
  measurementId:     process.env.FIREBASE_MEASUREMENTE_ID,
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()

export default db


//import { initializeApp, getApps } from 'firebase/app'
//import { getAnalytics } from 'firebase/analytics'
//const createFirebaseApp = () => {
//  const clientCredentials = {
//    apiKey:            process.env.FIREBASE_API_KEY,
//    authDomain:        process.env.FIREBASE_AUTH_DOMAIN,  
//    databaseURL:       process.env.FIREBASE_DATABASE_URL,
//    projectId:         process.env.FIREBASE_PROJECT_ID,
//    storageBucket:     process.env.FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//    appId:             process.env.FIREBASE_APP_ID,
//    measurementId:     process.env.FIREBASE_MEASUREMENTE_ID,
//  }
//
//  if (getApps().length <= 0) {
//    const app = initializeApp(clientCredentials)
//    // Check that `window` is in scope for the analytics module!
//    if (typeof window !== 'undefined') {
//      // Enable analytics. https://firebase.google.com/docs/analytics/get-started
//      if ('measurementId' in clientCredentials) {
//        getAnalytics()
//      }
//    }
//    return app
//  }
//}
//
//export default createFirebaseApp


