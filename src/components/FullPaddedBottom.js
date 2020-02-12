import React from 'react';

const FullPaddedBottom = () => {
  return (
    <section className="full padded-bottom center" id="padded-bottom-img">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 padded-bottom">
            <ul className="folio-list dropshadow">
              <li><a className="lightbox" href={require("../assets/images/portfolio/project4.jpg")} title="Caption goes here."><img src={require("../assets/images/portfolio/project4.jpg")} alt="thumbnail" /></a></li>
              <li><a className="lightbox" href={require("../assets/images/portfolio/project5.jpg")} title="Caption goes here."><img src={require("../assets/images/portfolio/project5.jpg")} alt="thumbnail" /></a></li>
              <li><a className="lightbox" href={require("../assets/images/portfolio/project6.jpg")} title="Caption goes here."><img src={require("../assets/images/portfolio/project6.jpg")} alt="thumbnail" /></a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            <span className="large-accent">“</span>
            <h2>They take time to deeply understand what the product is trying to communicate.</h2>
            <span className="line no-accent" />
            <h3>Johnny Doeson</h3>
            <h4>Raspberry</h4>
          </div>
        </div>
      </div>
    </section>

  )
}

export default FullPaddedBottom;
