import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './router'

ReactDOM.render(<Router><Routes></Routes></Router>, document.getElementById('root'));

