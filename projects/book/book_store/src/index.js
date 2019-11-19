import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './init.css'
import './index.css'
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
