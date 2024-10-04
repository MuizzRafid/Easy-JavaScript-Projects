"use strict";

var bulb = document.querySelector(".bulb");
var btn = document.querySelector(".bulb-btn");
var value = 0;
btn.addEventListener("click", function () {
  if (value == 0) {
    bulb.style.backgroundColor = "yellow";
    bulb.style.boxShadow = "0 0 25px 5px rgb(255, 255, 173)";
    value = 1;
  } else {
    bulb.style.backgroundColor = "white";
    bulb.style.boxShadow = "0 0 15px 2px rgb(219, 221, 222)";
    value = 0;
  }
});