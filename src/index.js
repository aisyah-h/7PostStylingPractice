//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

console.log(currentTime);

//here onwards is my own code -- wrong and doesnt get intended result
const greeting = function (currentTime) {
  if (currentTime < 12) {
    return "Morning"
  }
  else if (12 < currentTime < 18) {
    return "Afternoon"
  }
  else if (18 < currentTime < 24) {
    return "Evening"
  }
  else {
    return "Day"
  }
};

ReactDOM.render(
  <h1 style={date} + {greeting}>Good</h1>,
  document.getElementById("root")
);
