import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/Slices/cartSlice";
import useResturant from "../../utils/useResturantList";
import Shimmer from "../Shimmer/Shimmer";
import useOnline from "../../utils/useOnline";

const Resturant_Menu = () => {
    const { id } = useParams();
    const [Res_detail, Res_items] = useResturant(id);
    const dispatch = useDispatch();
    const online=useOnline();
    if(!online){
        return <h1>No internet</h1>
    }

    const addItem = () => {
        dispatch(addItems("Grapes"));
    };

    if (!Res_detail || Res_items.length === 0) {
        // Data is still loading
        return <Shimmer />;
    }

    return (
        <>
            <h2>This is menu of id: {id}</h2>
            <button onClick={() => addItem()}>add items</button>
            <h5>{Res_detail.name}</h5>
            <div>
                {Res_items.map((resturant_item, index) => (
                    <h1 key={index}>{resturant_item?.name}</h1>
                ))}
            </div>
        </>
    );
};

export default Resturant_Menu;
