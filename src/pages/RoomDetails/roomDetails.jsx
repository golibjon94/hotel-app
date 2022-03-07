import React from "react";
import "./roomDetails.css";
import { useParams } from "react-router-dom";
import { roomsData } from "../../Datas/roomsData";
import ReserveComponent from "../../components/ReserveComponent/reserveComponent";

export default function RoomDetails() {
  const { id } = useParams();
  const chosenRoom = roomsData.filter((room) => room.id === id)[0];
  return (
    <div className="room_details">
      <div className="room_details_img">
        <img src={chosenRoom.image} alt="" />
      </div>
      <div className="about_room">
        <div className="room_desc">
        <p className="room-type">Xona turi: {chosenRoom.category}</p>
          <p>Xonalar haqida ma'lumot: {chosenRoom.description}</p>
          <p>Narxi: {chosenRoom.price}$</p>
        </div>
        <ReserveComponent chosenRoom={chosenRoom} />
      </div>
    </div>
  );
}

/*

      <div className="room_details_img">
      <img src={chosen.image} alt="" />
      </div>
      <div className="room_details_p">
      <h2>Xona turi: </h2> <p>{chosen.category}</p>
      <h2>Xonalar haqida ma'lumot:</h2> <p>  {chosen.description}</p>
      <h2>Narxi:</h2> <p> {chosen.price}$</p>
      </div>




       <p>Xona turi: {chosenRoom.category}</p>
          <p>Xonalar haqida ma'lumot: {chosenRoom.description}</p>
          <p>Narxi: {chosenRoom.price}$</p>
    */