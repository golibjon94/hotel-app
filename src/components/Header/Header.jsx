import React from 'react'
import './header.css';
function Main() {
  return (
    <div>
    <header>
        <a href="#" className="brand">Amazing Hotel</a>
        <div className="menu-btn"></div>
        <div className="navigation">
            <a href="#main">Home</a>
            <a href="#about">About</a>
            <a href="#work">Rooms</a>
            <a href="#contact">Contact</a>
        </div>
    </header>
    </div>
  )
}

export default Main