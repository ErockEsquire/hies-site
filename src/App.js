import React from 'react';
import './App.scss';
import Water from './components/water'
import Navbar from './containers/navbar'
import Home from './components/home'
import Geo from './components/geo'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Water/>
      <Home/>
      <div className="image-break"/>
      <Geo/>
    </div>
  );
}

export default App;
