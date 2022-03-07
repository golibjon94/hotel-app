import React, { useContext } from "react";
import "./reserved.css";
import { StateContext } from "../../Context/context";
import { PriceChange } from "@mui/icons-material";
import { reserveRoom } from "../../Reducer/reserveAction";

export default function Reserved() {
  const { state } = useContext(StateContext);
  const { reservedRooms } = state;

  return (
    <div className="reserved_rooms">
      <h2>Band qilingan xonalar</h2>
      {reservedRooms.length > 0 ? (
        reservedRooms.map((room,index) => (
          <div key={index} className="about_room">
            <img src={room.image} alt={room.id} />
            <div className="rom_info">
              <p><span className="room_infos">Categoriyasi: </span>{room.category}</p>
              <p><span className="room_infos">Xona haqida: </span> {room.description}</p>
              <p><span className="room_infos">Xona narxi: </span> {room.price}$ </p>
              <p><span className="room_infos">Band qilindi: </span>  {room.reservedDays} kunga </p>
              <p><span className="room_infos">Jami narxi: </span> {room.totalPrice}$</p>
            </div>
          </div>
        ))
      ) : (
        <h3>Hali xona band qilinmagan</h3>
      )}
    </div>
  );
}
