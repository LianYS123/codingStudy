import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , 
    document.getElementById('root')
);

serviceWorker.unregister();
