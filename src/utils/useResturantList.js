import { useState,useEffect } from "react";

const useResturant=(id)=>{
    const [Res_detail,Set_Res_Detail]=useState("");
    const [Res_Item,Set_Res_Item]=useState([]);
    useEffect(() => {
        (async ()=>{
          try {
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6275674&lng=77.4376541&restaurantId="+ id);
    
            const json = await response.json();
            Set_Res_Detail(json?.data?.cards[0].card.card.info);
            const allCardArray =
              json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const allItemArray = allCardArray.map((item) =>
              item?.card?.card?.itemCards?.map((oneItem) => oneItem?.card?.info)
            );
            // const categoryItem = allItemArray?.map((i) => i?.map((j) => j));
            Set_Res_Item(allItemArray.flat());
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        })();
    
      
    },[id]);
    return [Res_detail, Res_Item];
}
export default useResturant;