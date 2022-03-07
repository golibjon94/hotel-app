import React, { useState,useContext,useEffect} from "react";
import "./reserveComponent.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import {reserveRoom} from '../../Reducer/reserveAction';
import {StateContext} from '../../Context/context';

function ReserveComponent({ chosenRoom }) {
  const {state,dispatch} = useContext(StateContext)
  let day = new Date();
  let today = day.getDate();
  let year = day.getFullYear();
  let month = day.getMonth() + 1;
  today = today < 10 ? `0${today}` : today;
  month = month < 10 ? `0${month}` : month;
  let time = `${year}-${month}-${today}`;
  const [checkInDate, setCheckInDate] = useState(time);
  const [checkOutDate, setCheckOutDate] = useState(time);
  const [allSum,setAllSum]=useState(0)
  let chosenTime=new Date(checkOutDate).getTime()-new Date(checkInDate).getTime()
  let reservedDays=chosenTime/(1000*3600*24);

  // ----------------------------
  const reserveBtn = (e) => {
    if (chosenTime <= 0) {
      alert("kunni to'gri tanlang iltimos");
      setCheckInDate(time);
      setCheckOutDate(time);
    } 
    else {
      const totalPrice=parseInt(chosenRoom.price)* parseInt(reservedDays);
      const newReserve = {
        ...chosenRoom,
        reservedDays,
        totalPrice
      };
    
      dispatch(reserveRoom(newReserve));
      alert("Bizni tanlaganingiz uchun rahmat!Xonangiz band qilib qo'yildi.");
      setCheckInDate(time);
      setCheckOutDate(time);
    }
  };

  useEffect(() => {
    setAllSum(parseInt(reservedDays)*parseInt(chosenRoom.price))
  }, [checkInDate,checkOutDate]);
  return (
    <div className="reserve_container">
      <Stack component="form" noValidate spacing={3}>
        <TextField
          id="date"
          label="Kunni tanlang"
          type="date"
          value={checkInDate}
          onChange={e=>setCheckInDate(e.target.value)}
          sx={{ width: 200, cursor: "pointer" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Stack>
      <Stack component="form" noValidate spacing={3}>
        <TextField
          id="date"
          label="Kunni tanlang"
          type="date"
          value={checkOutDate}
          onChange={e=>setCheckOutDate(e.target.value)}
          sx={{ width: 200, cursor: "pointer" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Stack>
      <p>Jami summa:<span className="allsumma"><br/> {reservedDays>0 && allSum>0 && `${reservedDays} kunga ${allSum}$`}</span> </p>
      <button onClick={reserveBtn}>Band qilish</button>
    </div>
  );
}

export default ReserveComponent;
