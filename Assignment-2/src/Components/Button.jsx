import React from "react";
import Login from "./Login";
import JoinUs from "./JoinUs";
import ContactUs from "./ContactUs";
import Download from "./Download";
import Help from "./Help";
import Home from "./Home";
import Search from "./Search";
import Settings from "./Settings";

const Button = () => {
  return (
    <div className="buttons">
      <div>
        <JoinUs label="Join Us" />
        <Login label="Login" />
        <Search label="Search" />
        <Home label="Home" />
      </div>
      <div>
        <Settings label="Setting" />
        <ContactUs label="Contact Us" />
        <Help label="Help" />
        <Download label="Download" />
      </div>
    </div>
  );
};

export default Button;
