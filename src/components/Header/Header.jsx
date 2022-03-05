import React from 'react'
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
        <a href="#room">Rooms</a>
        <a href="#contact">Contact</a>
        <Link to="/reserved">Reserved</Link>
      </div>
    </header>
    </div>
  )
}

export default Main