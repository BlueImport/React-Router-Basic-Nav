import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router }  from "react-router-dom"; // adds router for use


// Here I have wrapped the app in the router.
ReactDOM.render(
    <Router>
    <App />
    </Router>
    , document.getElementById('root'));
