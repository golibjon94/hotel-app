import React from "react";
import "./rooms.css";
import Slider1 from "../../assets/images/slider-1.jpg";
import Slider2 from "../../assets/images/slider-2.jpg";
import Slider3 from "../../assets/images/slider-3.jpg";
import Slider4 from "../../assets/images/slider-4.jpg";
import Slider5 from "../../assets/images/slider-5.jpg";
import Slider6 from "../../assets/images/slider-6.jpg";

function Rooms() {
  return (
    <div>
      <section className="work" id="work">
        <div className="title reveal">
          <div className="section-title">Rooms & Suites</div>
        </div>
        <div className="content">
          <div className="card reveal">
            <div className="card-img">
              <img src={Slider1} alt="" />
            </div>
            <p className="single-rooms">Single Rooms</p>
            <p className="single-rooms-price">$100 / PER NIGHT</p>
          </div>

          <div className="card reveal">
            <div className="card-img">
              <img src={Slider2} alt="" />
            </div>
            <p className="single-rooms">Single Rooms</p>
            <p className="single-rooms-price">$100 / PER NIGHT</p>
          </div>
          <div className="card reveal">
            <div className="card-img">
              <img src={Slider3} alt="" />
            </div>
            <p className="single-rooms">Single Rooms</p>
            <p className="single-rooms-price">$100 / PER NIGHT</p>
          </div>
          <div className="card reveal">
            <div className="card-img">
              <img src={Slider4} alt="" />
            </div>
            <p className="single-rooms">Single Rooms</p>
            <p className="single-rooms-price">$100 / PER NIGHT</p>
          </div>
          <div className="card reveal">
            <div className="card-img">
              <img src={Slider5} alt="" />
            </div>
            <p className="single-rooms">Single Rooms</p>
            <p className="single-rooms-price">$100 / PER NIGHT</p>
          </div>
          <div className="card reveal">
            <div className="card-img">
              <img src={Slider6} alt="" />
            </div>
            <p className="single-rooms">Single Rooms</p>
            <p className="single-rooms-price">$100 / PER NIGHT</p>
          </div>
          <div className="title reveal">
            <a href="#" className="btn">
              See All
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rooms;
