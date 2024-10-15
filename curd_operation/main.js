var selectRow = null;
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 3000);
}

//clear all  Fields

function clearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#rollNo").value = "";
}

//add data
document.querySelector("#student-form").addEventListener("submit", (e) => {
  e.preventDefault();

  //get form values
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const rollNo = document.querySelector("#rollNo").value;

  if (firstName == "" || lastName == "" || rollNo == "") {
    showAlert("Please fill in all fields", "danger");
  } else {
    if (selectRow == null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${rollNo}</td>
      <td>
      <a href="#" class="btn btn-warning edit-btn edit">Edit</a>
      <a href="#" class="btn btn-danger del-btn delete">Delete</a>
      `;
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
});

//delete Data
document.querySelector("#student-list").addEventListener("click", (e) => {
  var targett = e.target;
  if (targett.classList.contains("delete")) {
    targett.parentElement.parentElement.remove();
    showAlert("Student Data Deleted", "danger");
  }
});

//edit data

document.querySelector("#student-list").addEventListener("click", (e) => {
  var targett = e.target;
  if (targett.classList.contains("edit")) {
    selectRow = targett.parentElement.parentElement;
    document.querySelector("#firstName").value =
      selectRow.children[0].textContent;
    document.querySelector("#lastName").value =
      selectRow.children[1].textContent;
    document.querySelector("#rollNo").value = selectRow.children[2].textContent;
  }
});
