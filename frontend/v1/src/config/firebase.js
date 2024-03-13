import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAFh61apbhrdY4ZjXIe-15ChlRD_AFin9w',
  authDomain: 'servicetown-marketplace.firebaseapp.com',
  projectId: 'servicetown-marketplace',
  storageBucket: 'servicetown-marketplace.appspot.com',
  messagingSenderId: '359416281130',
  appId: '1:359416281130:web:bf278d039e4a41459fab53',
  measurementId: 'G-32SGJ7PNRR'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const gprovider = new GoogleAuthProvider();