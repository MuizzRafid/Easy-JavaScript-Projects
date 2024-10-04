const Hexbtn = document.querySelector(".hex-btn");
const hexColor = document.querySelector(".hex-color-text");
const hexContainer = document.querySelector(".hex-color-container");
const hexCB = document.querySelector(".hex-color-copy");

Hexbtn.addEventListener("click", () => {
  const colors = "0123456789ABCDEF";
  let outputColor = "#";
  for (let i = 0; i < 6; i++) {
    outputColor += colors[Math.floor(Math.random() * 16)];
  }
  hexColor.textContent = outputColor;
  hexContainer.style.backgroundColor = outputColor;
  Hexbtn.style.color = outputColor;
});

const Rgbbtn = document.querySelector(".rgb-btn");
const rgbColor = document.querySelector(".rgb-color-text");
const rgbContainer = document.querySelector(".rgb-color-container");
const rgbCB = document.querySelector(".rgb-color-copy");

const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
let redValue, greenValue, blueValue, finalrgbValue;

rgbContainer.addEventListener("click", () => {
  redValue = red.value;
  greenValue = green.value;
  blueValue = blue.value;
  finalrgbValue = `rgb(${redValue},${greenValue},${blueValue})`;
  rgbColor.textContent = finalrgbValue;
  rgbContainer.style.backgroundColor = finalrgbValue;
  Rgbbtn.style.color = finalrgbValue;
  // Rgbbtn.addEventListener("click", () => {
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
