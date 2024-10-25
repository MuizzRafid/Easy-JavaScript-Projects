"use strict";

var slider = document.querySelector(".slider");
var dotsContainer = document.querySelector(".dots-container");

function fetchListOfImages() {
  var response, imageList;
  return regeneratorRuntime.async(function fetchListOfImages$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://picsum.photos/v2/list?page=1&limit=7", {
            method: "GET"
          }));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          imageList = _context.sent;

          if (imageList && imageList.length > 0) {
            displayImages(imageList);
          }

          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function displayImages(getImageList) {
  slider.innerHTML = getImageList.map(function (item) {
    return "\n    <div class=\"slide\">\n    <img src=".concat(item.download_url, " alt=").concat(item.id, " />\n    </div>\n    ");
  }).join("");
  dotsContainer.innerHTML = getImageList.map(function (item, index) {
    return "\n    <span class=\"dot ".concat(index == 0 ? "active" : "", "\" data-slide=").concat(index, "></span>\n    ");
  }).join("");
}

fetchListOfImages(); //slider functionality begins

setTimeout(function () {
  var slides = document.querySelectorAll(".slide");
  var prevBtn = document.querySelector(".prev");
  var nextBtn = document.querySelector(".next");
  var currentSlide = 0;

  function activeDot(slide) {
    document.querySelectorAll(".dot").forEach(function (dotItem) {
      dotItem.classList.remove("active");
      document.querySelector(".dot[data-slide=\"".concat(slide, "\"]")).classList.add("active");
    });
  }

  function changeCurrentSlide(currentSlide) {
    slides.forEach(function (slideItem, index) {
      return slideItem.style.transform = "translateX(".concat(100 * (index - currentSlide), "%)");
    });
  }

  changeCurrentSlide(currentSlide);
  nextBtn.addEventListener("click", function () {
    currentSlide++;

    if (slides.length - 1 < currentSlide) {
      currentSlide = 0;
    }

    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });
  prevBtn.addEventListener("click", function () {
    currentSlide--;

    if (0 > currentSlide) {
      currentSlide = slides.length - 1;
    }

    changeCurrentSlide(currentSlide);
    activeDot(currentSlide);
  });
  dotsContainer.addEventListener("click", function (event) {
    console.log(event.target.classList, event.target.dataset);

    if (event.target.classList.contains("dot")) {
      currentSlide = event.target.dataset.slide;
      changeCurrentSlide(currentSlide);
      activeDot(currentSlide);
    }
  });
}, 1000);
document.get;