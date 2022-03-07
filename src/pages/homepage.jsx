import React from "react";
import Main from "../components/Main/Main";
import Rooms from "../components/Rooms/Rooms";
import Maps from "../components/Maps/Maps";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Main />
      <Rooms />
      <Maps />
      <Footer />
    </div>
  );
};

export default Homepage;
