import React from "react";
import "./contact.css";
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
  return (
    <div>

      <section className="contact" id="contact">
        <div className="title-reveal">
          <h1>Bizga aloqaga chiqing</h1>
        </div>
        <div className="content">
          <div className="row">
            <div className="card reveal">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info">
                <h3>Address</h3>
                <span>Tashkent City</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info">
                <h3>Phone</h3>
                <span>+998 90 014 31 36</span>
              </div>
            </div>
            <div className="card reveal">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info">
              <h3>Facebook</h3>
                <a href=""><FacebookIcon style={{fontSize:"30px"}}/></a>
              </div>
            </div>
            <div className="card reveal">
              <div className="contact-icon">
               
              </div>
              <div className="info">
                <h3>Website</h3>
                <span>MyPortfolio.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
