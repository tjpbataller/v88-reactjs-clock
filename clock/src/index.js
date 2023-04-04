import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

let setTime = ()=>{
    let date = new Date();
    let time = date.toLocaleTimeString();
    let element = <h2>{time}</h2>;

    return element;
};
root.render(setTime());

let updateTime = ()=>{
    let element = setTime();
    root.render(element);
};

setInterval(updateTime, 1000);