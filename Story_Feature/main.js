var arr = [
  {
    db: "https://img.freepik.com/premium-photo/man-with-scarf-that-says-he-is-wearing-scarf_1009924-5201.jpg?w=740",
    story:
      "https://img.freepik.com/premium-photo/man-with-shirt-that-says-he-is-model_1009924-5202.jpg?w=740",
  },
  {
    db: "https://img.freepik.com/free-photo/young-model-red-shirt-holding-sport-equipment_114579-17423.jpg?t=st=1728400050~exp=1728403650~hmac=a34ead2d1531006f3a4333e1f25ee0f99455d8ec4034ec6b192b61ccd8059cd4&w=740",
    story:
      "https://img.freepik.com/free-photo/confident-businessman-portrait-posing-relaxed_158595-2925.jpg?t=st=1728402067~exp=1728405667~hmac=89e5185c27139ee5bfe71bbaf5e85cebf4dc15b3582b9623b8279e37dd5eb872&w=740",
  },
  {
    db: "https://img.freepik.com/premium-photo/young-man-park-summer-using-phone_251136-88901.jpg?w=826",
    story:
      "https://img.freepik.com/premium-photo/portrait-handsome-young-man-park-summer_251136-88893.jpg?w=826",
  },
  {
    db: "https://img.freepik.com/premium-photo/portrait-young-handsome-stylish-black-man-city_251136-89057.jpg?w=826",
    story:
      "https://img.freepik.com/premium-photo/portrait-handsome-young-black-man-outdoors-city_251136-88951.jpg?w=740",
  },
  {
    db: "https://img.freepik.com/premium-photo/studio-portrait-handsome-man-against-gray-background_251136-89286.jpg?w=740",
    story:
      "https://img.freepik.com/premium-photo/full-length-studio-portrait-handsome-man-standing-against-gray-background_251136-89274.jpg?w=740",
  },
];
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `
 <div class="story">
          <img id="${idx}" src="${elem.db}" alt="" />
        </div>
        
        `;
});

var storyian = document.querySelector("#storiyan");
storyian.innerHTML = clutter;
storyian.addEventListener("click", function (dets) {
  var value = arr[dets.target.id].story;
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector(
    "#full-screen"
  ).style.backgroundImage = `url(${value})`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});