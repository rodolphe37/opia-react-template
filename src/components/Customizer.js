import React from 'react';

const Customizer = () => {
  return (
    <div id="customizer">
      <div className="corner"><div className="cog" /></div>
      <div id="options">
        <div className="options-segment clearfix">
          <h4>Layout</h4>
          <a className="customize-button" href="dark-intro.html">Alternative</a>
        </div>
        <div className="options-segment clearfix">
          <h4>Extras</h4>
          <a className="customize-button" href="404.html">Error Page</a>
        </div>
        <div className="options-segment clearfix">
          <h4>Color Skins</h4>
          <ul className="color-scheme clearfix">
            <li className="cyan"><a href="#" rel="cyan" className="styleswitch" /></li>
            <li className="red"><a href="#" rel="red" className="styleswitch" /></li>
            <li className="pink"><a href="#" rel="pink" className="styleswitch" /></li>
            <li className="green"><a href="#" rel="green" className="styleswitch" /></li>
            <li className="yellow"><a href="#" rel="yellow" className="styleswitch" /></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Customizer;
