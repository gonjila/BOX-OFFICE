import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HashRouter> <App /> </HashRouter>,
    document.getElementById('root')
);

reportWebVitals()

serviceWorker.register();