import React from 'react'
import { Link } from 'react-router-dom'


import './footer.css'

function Footer() {
  return (
    <div>


<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Amazing <span>Hotel</span></h3>

				<div className="footer-links">
					{/* <p> <a href="#">Home</a></p>
					<p> <a href="#">Pricing</a></p>
					<p> <a href="#">About</a></p>
					<p> <a href="#">Faq</a></p>
					<p> <a href="#">Contact</a></p> */}

        <Link  to="/">Home</Link>
        <Link  to="/room">Rooms</Link>
        <Link to="/contact">Contact</Link>
        <Link  to="/reserved">Reserved</Link>
			
				</div>

				<p className="footer-company-name">Company Name © 2022</p>

				<div className="footer-icons">

					<a href="#"><i className="FacebookIcon"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

			<div className="footer-right">

				<p>Contact Us</p>

				<form action="#" method="post">

					<input type="text" name="email" placeholder="Email"/>
					<textarea name="message" placeholder="Message"></textarea>
					<button>Send</button>

				</form>

			</div>

		</footer>

    </div>
  )
}

export default Footer