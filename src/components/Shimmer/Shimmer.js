import React from "react";
import "./shimmer.css"

export default Shimmer = () => {
  return (
    <div className="Shimmers">
      {Array(9)
        .fill("")
        .map((e, index) => (

          <div className="cards" key={index}>
            <img ></img>
            <h2>{}</h2>
            <h2>{}</h2>
          </div>
        ))}
    </div>
  );
};
