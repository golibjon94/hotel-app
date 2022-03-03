import React from 'react'
import './about.css'
import Room from '../../assets/images/img_1.jpg'

function About() {
  return (
    <div>
        <section className="about" id="about">
      <div className="title reveal">
        <div className="section-title">Abous Us</div>
      </div>
      <div className="content">
        <div className="column col-left reveal">
          <div className="img-card">
            <img src={Room} />
          </div>
        </div>
        <div className="column col-right reveal">
          <h2 className="content-title">Welcome!</h2>
          <p className="paragraph-text">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <br />
          <p className="paragraph-text">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <a href="#" className="btn">LEARN MORE</a>
        </div>

      </div>
    </section>
    </div>
  )
}

export default About