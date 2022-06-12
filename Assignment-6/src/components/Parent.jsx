import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <>
      <Child
        date={"28/10/2020"}
        logo={"Case Study"}
        heading={"Amazon Gift"}
        subheading={"Pay"}
        devices={"Dekstop - Mobile"}
        className="yellow"
      />
      <Child
        date={"17 Sep 2020"}
        logo={"Case Study"}
        heading={"Apple Gift"}
        subheading={"Payment"}
        devices={"MacOs - Mobile"}
        className="white"
      />
    </>
  );
};

export default Parent;
