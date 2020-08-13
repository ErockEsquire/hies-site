import React from 'react';
import './App.scss';
import Navbar from './containers/navbar'
import Contact from './home/contact'
import Main from './home/main'
import About from './about/about'
import Leaders from './about/leaders'
import Projects from './projects/projects'
import Services from './services/service'
import NotFound from './containers/NotFound'
import ScrollToTop from './containers/scroll'

import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop/>
      <Switch>
        <Route exact={true} path="/" component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/leaders" component={Leaders}/>
        <Route path="/services" component={Services}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <Contact/>
    </div>
  );
}

export default withRouter(App);