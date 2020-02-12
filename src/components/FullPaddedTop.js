import React from 'react';

const FullPaddedTop = () => {
  return (
    <section className="full padded-top center dark" id="back-img">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            <h3>Work</h3>
            <span className="line" />
            <h2>It’s not a job, It’s a life.</h2>
            <p>We create experiences that transform brands &amp; grow businesses.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 padded-top">
            <ul className="folio-list">
              <li><a className="lightbox" href={require("../assets/images/portfolio/project1.jpg")} title="Caption goes here."><img src={require("../assets/images/portfolio/project1.jpg")} alt="thumbnail" /></a></li>
              <li><a className="lightbox" href={require("../assets/images/portfolio/project2.jpg")} title="Caption goes here."><img src={require("../assets/images/portfolio/project2.jpg")} alt="thumbnail" /></a></li>
              <li><a className="lightbox" href={require("../assets/images/portfolio/project3.jpg")} title="Caption goes here."><img src={require("../assets/images/portfolio/project3.jpg")} alt="thumbnail" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}

export default FullPaddedTop;
