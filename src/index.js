
// importing bootstrap, jquery and popper.js

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import NavMenu from './components/NavMenu';



import * as serviceWorker from './serviceWorker';






ReactDOM.render(<NavMenu />, document.getElementById('navbar'));


ReactDOM.render(<App />, document.getElementById('hello'));





serviceWorker.unregister();

