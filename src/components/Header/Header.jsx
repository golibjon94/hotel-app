import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css';
function Main() {
  const [scrolled, setScrolled] = useState(false);
  function Scroll() {
    if (window !== "undefined") {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else setScrolled(false);
    }
  }
  window !== "undefined" && window.addEventListener("scroll", Scroll);
  return (
    <div>
      <header className={scrolled && "scrolled_nav"}>
      <Link to="/" className="brand">
        Amazing Hotel
      </Link>
      <div className="menu-btn"></div>
      <div className="navigation">
      <Link to="/">Home</Link>
        <Link to="/room">Rooms</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/reserved">Reserved</Link>
      </div>
    </header>
    </div>
  )
}

export default Main