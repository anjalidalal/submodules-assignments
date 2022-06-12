import React from "react";
import MyButton from "./MyButton";

const App = () => {
  return (
    <div className="root">
      <div>
        <MyButton label="Join Us" className="join" />
        <MyButton label="Login" className="login" />
        <MyButton label="Search" className="search" />
        <MyButton label="Home" className="home" />
      </div>
      <div>
        <MyButton label="Setting" className="setting" />
        <MyButton label="Contact Us" className="contact" />
        <MyButton label="Help" className="help" />
        <MyButton label="Download" className="download" />
      </div>
    </div>
  );
};

export default App;
