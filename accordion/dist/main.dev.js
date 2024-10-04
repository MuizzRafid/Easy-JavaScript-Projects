"use strict";

var data = [{
  id: "1",
  question: "What are accordion components?",
  answer: "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
}, {
  id: "2",
  question: "What are they used for?",
  answer: "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options."
}, {
  id: "3",
  question: "Accordion as a musical instrument",
  answer: "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres."
}, {
  id: "4",
  question: "Can I create an accordion component with a different framework?",
  answer: "Yes of course, it is very possible to create an accordion component with another framework."
}];
var accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data.map(function (dataItem) {
    return "\n    <div class=\"accordion_item\">\n    <div class=\"accordion_title\">\n    <h3>".concat(dataItem.question, "</h3>\n    <i class=\"fa-solid fa-arrow-down\"></i>\n    </div>\n    <div class=\"accordion_content\">\n    <p>").concat(dataItem.answer, "</p>\n    </div>\n    </div>\n    ");
  }).join(" ");
}

createAccordionData();
var getAccordionTitles = document.querySelectorAll(".accordion_title");
console.log("====================================");
console.log(getAccordionTitles);
console.log("====================================");
getAccordionTitles.forEach(function (currentItem) {
  currentItem.addEventListener("click", function (event) {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      var getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
      getAlreadyAddedActiveClasses.forEach(function (currentActiveItem) {
        currentActiveItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});