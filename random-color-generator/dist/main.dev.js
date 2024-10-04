"use strict";

var Hexbtn = document.querySelector(".hex-btn");
var hexColor = document.querySelector(".hex-color-text");
var hexContainer = document.querySelector(".hex-color-container");
var hexCB = document.querySelector(".hex-color-copy");
Hexbtn.addEventListener("click", function () {
  var colors = "0123456789ABCDEF";
  var outputColor = "#";

  for (var i = 0; i < 6; i++) {
    outputColor += colors[Math.floor(Math.random() * 16)];
  }

  hexColor.textContent = outputColor;
  hexContainer.style.backgroundColor = outputColor;
  Hexbtn.style.color = outputColor;
});
var Rgbbtn = document.querySelector(".rgb-btn");
var rgbColor = document.querySelector(".rgb-color-text");
var rgbContainer = document.querySelector(".rgb-color-container");
var rgbCB = document.querySelector(".rgb-color-copy");
var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");
var redValue, greenValue, blueValue, finalrgbValue;
rgbContainer.addEventListener("click", function () {
  redValue = red.value;
  greenValue = green.value;
  blueValue = blue.value;
  finalrgbValue = "rgb(".concat(redValue, ",").concat(greenValue, ",").concat(blueValue, ")");
  rgbColor.textContent = finalrgbValue;
  rgbContainer.style.backgroundColor = finalrgbValue;
  Rgbbtn.style.color = finalrgbValue; // Rgbbtn.addEventListener("click", () => {
  // });
});

function copyhaxColor() {
  navigator.clipboard.writeText(hexColor.textContent);
  alert("Hex Color Copied");
}

hexCB.addEventListener("click", copyhaxColor);

function copyrgbColor() {
  navigator.clipboard.writeText(rgbColor.textContent);
  alert("RGB Color Copied");
}

rgbCB.addEventListener("click", copyrgbColor);