import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBeBF6kNYUJD6YfnqAZOz0OPAw-ygf73OU",
    authDomain: "public-aerochallenge-app.firebaseapp.com",
    projectId: "public-aerochallenge-app",
    storageBucket: "public-aerochallenge-app.appspot.com",
    messagingSenderId: "699812550971",
    appId: "1:699812550971:web:c514b7f7d090febd6b7f1e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db