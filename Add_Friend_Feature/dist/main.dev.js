"use strict";

var isstatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var value = 0;
addFriend.addEventListener("click", function () {
  if (value == 0) {
    addFriend.innerHTML = "Remove Friend";
    addFriend.style.backgroundColor = "#bababa";
    isstatus.innerHTML = "Friends";
    isstatus.style.color = "Green";
    value = 1;
  } else {
    addFriend.innerHTML = "Add Friend";
    addFriend.style.backgroundColor = "cadetblue";
    isstatus.innerHTML = "Removed";
    isstatus.style.color = "red";
    value = 0;
  }
});