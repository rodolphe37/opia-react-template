import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <ul id="scene" className="scene" data-friction-x="0.1" data-friction-y="0.1" data-scalar-x={25} data-scalar-y={15}>
        <li className="layer" data-depth={0.00} />
        <li className="layer" data-depth="0.10"><div className="background" data-0="transform: translate3d(0px, 0px, 0px);" data-top-bottom="transform: translate3d(0px, 300%, 0px);" /></li>
        <li className="layer" data-depth="0.15"><div className="triangles" /></li>
        <li className="layer" data-depth="0.25"><div className="sphere" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/sphere.png")} alt="sphere" /></div></li>
        <li className="layer" data-depth="0.20"><div className="title" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img className="has-retina" src={require("../images/logo.png")} alt="Opia" /><span className="line" /></div></li>
        <li className="layer" data-depth="0.30">
          <div className="hero-content" data-0="opacity: 1;" data-top-bottom="opacity: 0;">
            <h1>Bonjour</h1>
            <p className="sub-title">We're currently working on our full site.</p>
          </div>
        </li>
        <li className="layer" data-depth="0.40">
          <div className="depth-1 flake1" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth1/flakes1.png")} alt="flake" /></div>
          <div className="depth-1 flake2" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth1/flakes2.png")} alt="flake" /></div>
          <div className="depth-1 flake3" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth1/flakes3.png")} alt="flake" /></div>
          <div className="depth-1 flake4" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth1/flakes4.png")} alt="flake" /></div>
        </li>
        <li className="layer" data-depth="0.50">
          <div className="depth-2 flake1" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth2/flakes1.png")} alt="flake" /></div>
          <div className="depth-2 flake2" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth2/flakes2.png")} alt="flake" /></div>
        </li>
        <li className="layer" data-depth="0.60">
          <div className="depth-3 flake1" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth3/flakes1.png")} alt="flake" /></div>
          <div className="depth-3 flake2" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth3/flakes2.png")} alt="flake" /></div>
          <div className="depth-3 flake3" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth3/flakes3.png")} alt="flake" /></div>
          <div className="depth-3 flake4" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth3/flakes4.png")} alt="flake" /></div>
        </li>
        <li className="layer" data-depth="0.80"><div className="depth-4" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth4/flakes.png")} alt="flake" /></div></li>
        <li className="layer" data-depth={1.00}><div className="depth-5" data-0="opacity: 1;" data-top-bottom="opacity: 0;"><img src={require("../images/flakes/depth5/flakes.png")} alt="flake" /></div></li>
      </ul>
      <a id="action" href="#intro" />
    </section>

  )
}

export default Hero;
