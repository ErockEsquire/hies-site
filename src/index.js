import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import "animate.css/animate.min.css";
import { createBrowserHistory } from "history";

import { BrowserRouter as Router } from 'react-router-dom'

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
      <App/>
    </Router>,
  document.getElementById('root')
);

