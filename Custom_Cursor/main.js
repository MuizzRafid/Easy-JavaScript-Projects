var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

crsr.style.backgroundColor = "green";

main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
});
