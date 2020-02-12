import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Hero from './components/Hero';
import './components/css/loader.css';
import './components/css/framework.css'
import './components/css/style.css'
import Intro from './components/Intro';
import ContainerPadded from './components/ContainerPadded';
import FullPaddedTop from './components/FullPaddedTop';
import FullPaddedBottom from './components/FullPaddedBottom';
import ContainerPaddedCenter from './components/ContainerPaddedCenter';
import Customizer from './components/Customizer';


function App() {
  return (
    <div className="App">
      <Hero />
      <Intro />
      <ContainerPadded />
      <FullPaddedTop />
      <FullPaddedBottom />
      <ContainerPaddedCenter />
      <Customizer />
    </div>
  );
}

export default App;
