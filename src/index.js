import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: "AIzaSyAipTZ48b0LxWE_lTeHphxyVHqRSWx1vxY",
    authDomain: "chatfirebase-71595.firebaseapp.com",
    databaseURL: "https://chatfirebase-71595.firebaseio.com",
    projectId: "chatfirebase-71595",
    storageBucket: "chatfirebase-71595.appspot.com",
    messagingSenderId: "266448329166",
    appId: "1:266448329166:web:7cfc5f97b2e8ba2d"
});

const routing = (
    <Router>
        <div id='routing-container'>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
