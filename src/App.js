import React from 'react';
import './App.scss';
import Navbar from './containers/navbar'
import ContactInfo from './home/contact'
import Main from './home/main'
import About from './about/about'
import Leaders from './about/leaders'
import Projects from './projects/projects'
import Services from './services/service'
import Contact from './contact/contact'
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
        <Route path="/projects" component={Projects}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <ContactInfo/>
    </div>
  );
}

export default withRouter(App);