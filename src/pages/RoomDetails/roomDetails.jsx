import React from "react";
import "./roomDetails.css";
import { useParams } from "react-router-dom";
import { roomsData } from "../../Datas/roomsData";
// import TimeInput from './timePicker';
export default function RoomDetails() {
  const {id}=useParams()
  const chosen=roomsData.filter(room=>room.id===id)[0];
  return (
    <div className="room_details">
      <div className="timePicker">
        {/* <TimeInput /> */}
        </div>
      <div className="room_details_img">
      <img src={chosen.image} alt="" />
      </div>
      <div className="room_details_p">
      <h2>Xona turi: </h2> <p>{chosen.category}</p>
      <h2>Xonalar haqida ma'lumot:</h2> <p>  {chosen.description}</p>
      <h2>Narxi:</h2> <p> {chosen.price}$</p>
      </div>
    </div>
  );
}
