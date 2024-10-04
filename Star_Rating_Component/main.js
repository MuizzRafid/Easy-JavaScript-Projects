const stars = document.querySelectorAll(".fa-star-o");
const selectedRatingValueText = document.querySelector(
  ".selected-rating-value"
);

let currentStarRatingValue = -1;
for (let i = 0; i < 5; i++) {}

stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;

  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleOnClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});

function starRatingUpdate(getRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getRatingValue) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function handleMouseOver(event) {
  let currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  else {
    starRatingUpdate(currentRatingValue);
  }
}
function handleOnClick(event) {
  let currentRatingValue = event.target.dataset.rating;
  currentStarRatingValue = currentRatingValue;
  selectedRatingValueText.textContent = currentRatingValue;
  starRatingUpdate(currentRatingValue);
}
function handleMouseLeave() {
  starRatingUpdate(currentStarRatingValue);
}
