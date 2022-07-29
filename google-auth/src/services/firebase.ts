// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDyAcWsRGLSMg814uXMnlrDpUp8ThBQNvU',
  authDomain: 'auth-b26ca.firebaseapp.com',
  projectId: 'auth-b26ca',
  storageBucket: 'auth-b26ca.appspot.com',
  messagingSenderId: '1055316835373',
  appId: '1:1055316835373:web:e95c92f620c14e00034ca4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);