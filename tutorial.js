import React from "react";
import ReactDOM  from "react-dom/client";
const heading = React.createElement("h1", {id:"title",class:"head",key:"h1"}, "Namaste React"); // Using React library properly
const heading2 = React.createElement("h2", {id:"",class:"head",key:"h2"}, "Namaste React2");
const continer = React.createElement("div", {id:"",class:"head",key:"container"}, [heading,heading2]);
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(continer); // Using ReactDOM and rendering the component