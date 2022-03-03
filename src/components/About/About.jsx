import React from 'react'
import './about.css'
import Room from '../../assets/images/img_1.jpg'

function About() {
  return (
    <div>
            <section class="about" id="about">
      <div class="title reveal">
        <div class="section-title">Abous Us</div>
      </div>
      <div class="content">
        <div class="column col-left reveal">
          <div class="img-card">
            <img src={Room} />
          </div>
        </div>
        <div class="column col-right reveal">
          <h2 class="content-title">Welcome!</h2>
          <p class="paragraph-text">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <br />
          <p class="paragraph-text">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>
          <a href="#" class="btn">SEE MORE</a>
        </div>

      </div>
    </section>
    </div>
  )
}

export default About