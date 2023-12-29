import React from "react";
import "../../App.css";
import { img_url } from "../../config";

export default RestrauntCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
    return (
      <div className="card">
        <img src={img_url+cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h2>{cuisines.join(",")}</h2>

        <p><div className="circle"><div className="star">&#9733;</div></div>{avgRating}</p>
      </div>
    );
  };
  