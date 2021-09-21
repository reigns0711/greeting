import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;

const currentStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good morning";
  currentStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good evening";
  currentStyle.color = "Green";
} else {
  greeting = "Good Night dude";
  currentStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="head" style={currentStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
