import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import "animate.css/animate.min.css";
import { createBrowserHistory } from "history";
import allReducer from './redux-reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Router } from 'react-router-dom'

const store = createStore(allReducer);
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

