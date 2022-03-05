import React from "react";
import "./roomDetails.css";
import { useParams } from "react-router-dom";
import { roomsData } from "../../Datas/roomsData";
export default function RoomDetails() {
  const {id}=useParams()
  const chosen=roomsData.filter(room=>room.id===id)[0];
  return (
    <div className="room_details">
    
      <img src={chosen.image} alt="" />
      <p>{chosen.category}</p>
      <p>{chosen.description}</p>
      <p>{chosen.price}</p>
    </div>
  );
}
