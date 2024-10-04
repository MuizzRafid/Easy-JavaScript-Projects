"use strict";

var stars = document.querySelectorAll(".fa-star-o");
var selectedRatingValueText = document.querySelector(".selected-rating-value");
var currentStarRatingValue = -1;

for (var i = 0; i < 5; i++) {}

stars.forEach(function (starItem, index) {
  starItem.dataset.rating = index + 1;
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleOnClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});

function starRatingUpdate(getRatingValue) {
  for (var _i = 0; _i < 5; _i++) {
    if (_i < getRatingValue) {
      stars[_i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[_i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function handleMouseOver(event) {
  var currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;else {
    starRatingUpdate(currentRatingValue);
  }
}

function handleOnClick(event) {
  var currentRatingValue = event.target.dataset.rating;
  currentStarRatingValue = currentRatingValue;
  selectedRatingValueText.textContent = currentRatingValue;
  starRatingUpdate(currentRatingValue);
}

function handleMouseLeave() {
  starRatingUpdate(currentStarRatingValue);
}