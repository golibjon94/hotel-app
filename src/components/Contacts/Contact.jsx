import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
      <div className="title reveal">
        <div className="section-title">Contact Me</div>
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
              <h3>Email Address</h3>
              <span>golib94@gmail.com</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="contact-icon">
              <i className="fas fa-globe"></i>
            </div>
            <div className="info">
              <h3>Website</h3>
              <span>MyPortfolio.org</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="contact-form reveal">
            <h3>Send Message</h3>
            <div className="input-box">
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Email"/>
            </div>
            <div className="input-box">
              <textarea rows="8" cols="80" placeholder="Message"></textarea>
            </div>
            <div className="input-box">
              <input type="submit" className="send-btn" value="Send"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact