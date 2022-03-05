import React from 'react'
import './maps.css'

function Maps() {
  return (
    <div className='maps'>
         <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7646767348174!2d69.24670881519486!3d41.313982679270936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2sHilton%20Tashkent%20City!5e0!3m2!1sru!2s!4v1646498308060!5m2!1sru!2s"
        height="500"
        style={{border:"0",width:"100%"}}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Maps