import React from "react";
import "./rooms.css";
import {roomsData} from "../../Datas/roomsData"
import {useNavigate} from 'react-router-dom';

function Rooms() {
  const navigate=useNavigate()
  const getDetailPage=(e,id)=>{
    e.preventDefault();
    navigate(`/roomDetails/${id}`)
  }
  return (
    <div>
      <section className="room" id="room">
          <div className="section-title">
            <h1>Xonalar & Suitlar</h1>
        </div>
        <div className="rooms_list">
         {roomsData.map(room=>(
        <div className="content">
            <div className="card-img">
              <img onClick={(e,id)=>getDetailPage(e,room.id)} src={room.image} alt={room.id} />
            </div>
            <p className="single-rooms">{room.category}</p>
            <p className="single-rooms-price">${room.price} / 1 kunga</p>
          </div>
         ))}
         </div>
      </section>
    </div>
  );
}

export default Rooms;
