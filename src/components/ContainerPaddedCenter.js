import React from 'react';

const ContainerPaddedCenter = () => {
  return (
    <section className="container padded center">
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <h3>contact</h3>
          <span className="line" />
          <p>Be the first to know when we launch our site.</p>
          <form id="contact" name="contact" method="post" noValidate="novalidate">
            <fieldset>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" defaultValue={""} />
              <input id="submit" type="submit" name="submit" defaultValue="Send Email" />
            </fieldset>
          </form>
          <div id="success">
            <p>Your message was sent successfully! I will be in touch as soon as I can.</p>
          </div>
          <div id="error">
            <p>Something went wrong, try refreshing and submitting the form again.</p>
          </div>
        </div>
      </div>
      <div className="row padded">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <span className="line no-accent" />
          <form id="subscribe-form" action="#" method="get">
            <input type="email" name="EMAIL" onfocus="if(this.value == 'Enter E-mail Address') { this.value = ''; }" onblur="if(this.value == '') { this.value = 'Enter E-mail Address'; }" defaultValue="Enter E-mail Address" className="text" />
            <input type="submit" defaultValue="Subscribe" name="subscribe" className="submit" id="subscribe" />
            <div id="subscribe-result" />
          </form>
          <ul className="social-list padded">
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Behance</a></li>
            <li><a href="#">Dribbble</a></li>
          </ul>
          <p className="copyright">© 2020 Rodolphe Augusto. All rights reserved.<br />Make something you love.</p>
        </div>
      </div>
    </section>

  )
}

export default ContainerPaddedCenter;
