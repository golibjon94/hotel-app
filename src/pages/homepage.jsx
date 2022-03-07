import React from "react";
import Main from "../components/Main/Main";
import Rooms from "../components/Rooms/Rooms";
// import Contact from "../components/Contacts/Contact";
import Maps from "../components/Maps/Maps";
import Footer from "../components/Footer/Footer";



const Homepage = () => {
  return (
    <div>
       <Main /> 
      <Rooms />
      {/* <Contact /> */}
      <Maps />
      <Footer />
    </div>
  );
};

export default Homepage;
