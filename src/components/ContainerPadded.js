import React from 'react';

const ContainerPadded = () => {
  return (
    <section className="container padded-bottom center-mobile relative list">
      <div className="row">
        <div className="block col-xs-12 col-sm-5">
          <i className="icon icon-basic-eye" />
          <h3>Branding &amp; positioning</h3>
          <p>Understanding who you are and what you want is our strategy for your brand. We are always figuring out ways to capture your vision, so people can get on board.</p>
        </div>
        <div className="block col-xs-12 col-sm-5 col-sm-offset-2">
          <i className="icon icon-basic-webpage-img-txt" />
          <h3>Web design &amp; development</h3>
          <p>We've got your front end and back end needs covered. We're always looking for strategies to make your brand's needs fit with today's development languages.</p>
        </div>
      </div>
      <span className="separator" />
      <div className="row">
        <div className="block col-xs-12 col-sm-5">
          <i className="icon icon-basic-photo" />
          <h3>Photogprahy</h3>
          <p>Yep, say cheese. Finding ways to help tell your story through photography is a powerful tool to make your branded content stand out from the rest.</p>
        </div>
        <div className="col-xs-12 col-sm-5 col-sm-offset-2">
          <i className="icon icon-basic-share" />
          <h3>Social Strategy</h3>
          <p>This a powerful outlet that constantly gets overlooked. We strive to figure out ways to help your audience grow through all social platforms.</p>
        </div>
      </div>
    </section>

  )
}

export default ContainerPadded;
