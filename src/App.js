import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Hero from './components/Hero';
import './assets/css/loader.css';
import './assets/css/framework.css'
import './assets/css/style.css'
import Intro from './components/Intro';
import ContainerPadded from './components/ContainerPadded';
import FullPaddedTop from './components/FullPaddedTop';
import FullPaddedBottom from './components/FullPaddedBottom';
import ContainerPaddedCenter from './components/ContainerPaddedCenter';
import Customizer from './components/Customizer';
import PageLoader from './components/PageLoader';


function App() {
  return (
    <div className="App">
      <Hero />
      <Intro />
      <ContainerPadded />
      <FullPaddedTop />
      <FullPaddedBottom />
      <ContainerPaddedCenter />
      <PageLoader />
      <Customizer />
    </div>
  );
}

export default App;
