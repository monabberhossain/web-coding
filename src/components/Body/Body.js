import React, { useEffect, useState } from "react";
import Technology from "../Technology/Technology";
import Blog from "../Blog/Blog";
import "./Body.css";

const Body = ({ addToListHandler }) => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    fetch("language.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <div className="body">
      <h1 className="headline">Select today’s study activities</h1>
      <div className="technology-container">
        {technologies.map((technology) => (
          <Technology
            key={technology.id}
            technology={technology}
            addToListHandler={addToListHandler}
          />
        ))}
      </div>
      <Blog />
    </div>
  );
};

export default Body;
