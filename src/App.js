import React from 'react';
import './App.scss';
import Navbar from './containers/navbar'
import Contact from './home/contact'
import Main from './home/main'
import About from './about/about'
import Services from './services/service'
import ScrollToTop from './containers/scroll'

import { withRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Switch>
          <Route exact={true} path="/" component={Main}/>
          <Route path="/about" component={About}/>
          <Route exact path="/services" component={Services}/>
        </Switch>
      </ScrollToTop>
      <Contact/>
    </div>
  );
}

export default withRouter(App);