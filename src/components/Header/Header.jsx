import React, {useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import {StateContext} from "../../Context/context"
function Main() {

  const [scrolled, setScrolled] = useState(false);
  const {state}=useContext(StateContext);
  const {reservedRooms}=state;
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
      <header className={scrolled ? "scrolled_nav":""}>
      <Link  to="/" className="brand">
        Amazing Hotel
      </Link>
      <div className="menu-btn"></div>
      <div className="navigation">
      <Link className="brand-link" to="/">Home</Link>
        <a className="brand-link" href="#room">Rooms</a>
        <a className="brand-link" href="#contact">Contact</a>
        <Link className="brand-link" to="/reserved">Reserved<span>({reservedRooms.length})</span></Link>
      </div>
    </header>
    </div>
  )
}

export default Main