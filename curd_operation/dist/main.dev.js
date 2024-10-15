"use strict";

var selectRow = null;

function showAlert(message, className) {
  var div = document.createElement("div");
  div.className = "alert alert ".concat(className);
  div.appendChild(document.createTextNode(message));
  var container = document.querySelector(".container");
  var main = document.querySelector(".main");
  container.insertBefore(div, main);
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
} //clear all  Fields


function clearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollNo").value = "";
} //add data


document.querySelector("#student-form").addEventListener("submit", function (e) {
  e.preventDefault(); //get form values

  var firstName = document.querySelector("#firstName").value;
  var lastName = document.querySelector("#lastName").value;
  var rollNo = document.querySelector("#rollNo").value;

  if (firstName == "" || lastName == "" || rollNo == "") {
    showAlert("Please fill in all fields", "danger");
  } else {
    if (selectRow == null) {
      var list = document.querySelector("#student-list");
      var row = document.createElement("tr");
      row.innerHTML = "\n      <td>".concat(firstName, "</td>\n      <td>").concat(lastName, "</td>\n      <td>").concat(rollNo, "</td>\n      <td>\n      <a href=\"#\" class=\"btn btn-warning edit-btn edit\">Edit</a>\n      <a href=\"#\" class=\"btn btn-danger del-btn delete\">Delete</a>\n      ");
      list.appendChild(row);
      selectRow = null;
      showAlert("New Student Added", "sucess");
    } else {
      selectRow.children[0].textContent = firstName;
      selectRow.children[1].textContent = lastName;
      selectRow.children[2].textContent = rollNo;
      selectRow = null;
      showAlert("Student Info Edited ", "info");
    }

    clearFields();
  }
}); //delete Data

document.querySelector("#student-list").addEventListener("click", function (e) {
  var targett = e.target;

  if (targett.classList.contains("delete")) {
    targett.parentElement.parentElement.remove();
    showAlert("Student Data Deleted", "danger");
  }
}); //edit data

document.querySelector("#student-list").addEventListener("click", function (e) {
  var targett = e.target;

  if (targett.classList.contains("edit")) {
    selectRow = targett.parentElement.parentElement;
    document.querySelector("#firstName").value = selectRow.children[0].textContent;
    document.querySelector("#lastName").value = selectRow.children[1].textContent;
    document.querySelector("#rollNo").value = selectRow.children[2].textContent;
  }
});