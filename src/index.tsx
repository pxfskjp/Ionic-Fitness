import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC8Uw9ThlxOC18r5R_I-T9bG6qUArguy3o",
    authDomain: "fitnessapp-swen325.firebaseapp.com",
    databaseURL: "https://fitnessapp-swen325.firebaseio.com",
    projectId: "fitnessapp-swen325",
    storageBucket: "fitnessapp-swen325.appspot.com",
    messagingSenderId: "408713018304",
    appId: "1:408713018304:web:382f3da8d8187bdb5c6625",
    measurementId: "G-QXBC1FQ0YF"
}

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
