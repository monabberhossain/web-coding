import React, { useState } from "react";
import Body from "../Body/Body";
import Side from "../Side/Side";
import "./Main.css";

const Main = () => {
  const [studyTime, setStudyTime] = useState(0);
  const addToListHandler = (technology) => {
    setStudyTime((prev) => prev + technology.time);
  };
  return (
    <div className="main">
      <Body addToListHandler={addToListHandler} />
      <Side studyTime={studyTime} />
    </div>
  );
};

export default Main;
