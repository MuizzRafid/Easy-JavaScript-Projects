const slider = document.querySelector(".slider");
const dotsContainer = document.querySelector(".dots-container");

async function fetchListOfImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=7",
      { method: "GET" }
    );
    const imageList = await response.json();
    if (imageList && imageList.length > 0) {
      displayImages(imageList);
    }
  } catch (err) {
    console.log(err);
  }
}

function displayImages(getImageList) {
  slider.innerHTML = getImageList
    .map(
      (item) => `
    <div class="slide">
    <img src=${item.download_url} alt=${item.id} />
    </div>
    `
    )
    .join("");
  dotsContainer.innerHTML = getImageList
    .map(
      (item, index) => `
    <span class="dot ${index == 0 ? "active" : ""}" data-slide=${index}></span>
    `
    )
    .join("");
}

fetchListOfImages();

//slider functionality begins

setTimeout(() => {
  const slides = document.querySelectorAll(".slide");

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentSlide = 0;

  function activeDot(slide) {
    document.querySelectorAll(".dot").forEach((dotItem) => {
      dotItem.classList.remove("active");
      document
        .querySelector(`.dot[data-slide="${slide}"]`)
        .classList.add("active");
    });
  }
  function changeCurrentSlide(currentSlide) {
    slides.forEach(
      (slideItem, index) =>
        (slideItem.style.transform = `translateX(${
          100 * (index - currentSlide)
        }%)`)
    );
  }

  changeCurrentSlide(currentSlide);

  nextBtn.addEventListener("click", () => {
    currentSlide++;
    if (slides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide--;
    if (0 > currentSlide) {
      currentSlide = slides.length - 1;
    }
    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsContainer.addEventListener("click", (event) => {
    console.log(event.target.classList, event.target.dataset);
    if (event.target.classList.contains("dot")) {
      currentSlide = event.target.dataset.slide;
      changeCurrentSlide(currentSlide);
      activeDot(currentSlide);
    }
  });
}, 1000);
