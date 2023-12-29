import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
// import { Resturants } from "../../config";
import "../../App.css";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import { filter_data } from "../../utils/Helper";
import useOnline from "../../utils/useOnline";

export default Body = () => {
  const [allResturants, SetResturant] = useState([]);
  const [Search_Text, Set_Search_Text] = useState([]);
  const [Searched_Data, Set_Searched_Data] = useState([]);
  const [err, set_err] = useState(false);
  const isonline=useOnline();
  useEffect(() => {
    //first way of fetching the API Data
    GetResturantData();
  }, []);
  async function GetResturantData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6275674&lng=77.4376541&carousel=true&third_party_vendor=1"
      );
      const json = await data.json();
      console.log(json);
      // Set_Searched_Data(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants)
      Set_Searched_Data(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      SetResturant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {}
  }

  // if (err) {
  //     return <h1>Opps no resturant</h1>
  // }
  if(!isonline){
    return <h1>No internet</h1>
  }

  return allResturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="Search_container">
        <input
          type="text"
          value={Search_Text}
          onChange={(e) => {
            Set_Search_Text(e.target.value);
          }}
          placeholder="Search for Resturant"
        />
        <button
          onClick={() => {
            const data = filter_data(Search_Text, allResturants);
            Set_Searched_Data(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Body_Container">
        {Searched_Data.map((resturant_item) => {
          return (
            <Link to={"/resturant/"+resturant_item.info.id}>
            <RestrauntCard
              {...resturant_item.info}
              key={resturant_item.info.id}
            />
            </Link>
          );
        })}
      </div>
    </>
  );
};
