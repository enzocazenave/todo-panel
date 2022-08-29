import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database/';


const firebaseConfig = {
    apiKey: "AIzaSyD5JH51yDgTbZIoK6p2DM3fZU8BKQdguJs",
    authDomain: "todo-app-99624.firebaseapp.com",
    projectId: "todo-app-99624",
    storageBucket: "todo-app-99624.appspot.com",
    messagingSenderId: "495393107440",
    appId: "1:495393107440:web:661593a5a96cbc9b520135"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getDatabase(FirebaseApp);
