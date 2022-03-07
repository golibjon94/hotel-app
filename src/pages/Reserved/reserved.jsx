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
            <div>
              <p>Category:{room.category}</p>
              <p>Xona haqida:{room.description}</p>
              <p>Xona narxi: {room.price}$ </p>
              <p>Band qilindi:  {room.reservedDays} kunga </p>
              <p>Jami Narxi:{room.totalPrice}$</p>
            </div>
          </div>
        ))
      ) : (
        <h3>Hali xona band qilinmagan</h3>
      )}
    </div>
  );
}
