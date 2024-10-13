"use strict";

console.log("lol");
var userNameInput = document.getElementById("userName");
var showDetailsButton = document.getElementById("showDetails");
var profileInfoDiv = document.getElementById("profileInfo");
var repoInfoDiv = document.getElementById("reposInfo"); //                                          ****** using async await

showDetailsButton.addEventListener("click", function _callee() {
  var userName, response, data;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          userName = userNameInput.value; //request the data from server

          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.github.com/users/".concat(userName)));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          showReposInfo(userName);
          showProfile(data);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
});

function showProfile(data) {
  console.log(data);
  profileInfoDiv.innerHTML = "<div class=\"card\">\n        <div class=\"card-img\">\n          <img\n            src=".concat(data.avatar_url, "\n            alt=").concat(data.name, "\n          />\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-title\">").concat(data.name, "</div>\n          <div class=\"card-subHeading\">").concat(data.login, "</div>\n          <div class=\"card-text\">\n           <p>").concat(data.bio, "</p>\n           <p>").concat(data.followers, " followers ").concat(data.following, " following\n          </div>\n          <button>\n          <a href=").concat(data.html_url, ">\n          Do Checkout Project\n          </a>\n          </button>\n        </div>\n      </div>");
}

function showReposInfo(userName) {
  var res, p, i;
  return regeneratorRuntime.async(function showReposInfo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.github.com/users/".concat(userName, "/repos")));

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(res.json());

        case 5:
          p = _context2.sent;

          for (i = 0; i < p.length; i++) {
            repoInfoDiv.innerHTML += "<div class=\"card\">\n\n          <div class=\"card-body\">\n            <div class=\"card-title\">".concat(p[i].name, "</div>\n            <div class=\"card-subHeading\">").concat(p[i].language, "</div>\n            <div class=\"card-text\">\n             <button>\n             <a href=").concat(p[i].html_url, ">\n             DO Checkout Project\n             </a>\n             </button>\n            </div>\n          </div>\n        </div>");
          }

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
} //                                     ***** using then and catch
//  function showReposInfo(userName) {
//   fetch(`https://api.github.com/users/${userName}/repos`)
//     .then((res) => res.json())
//     .then((p) => {
//       for (let i = 0; i < p.length; i++) {
//         repoInfoDiv.innerHTML += `<div class="card">
//           <div class="card-body">
//             <div class="card-title">${p[i].name}</div>
//             <div class="card-subHeading">${p[i].language}</div>
//             <div class="card-text">
//              <button>
//              <a href=${p[i].html_url}>
//              DO Checkout Project
//              </a>
//              </button>
//             </div>
//           </div>
//         </div>`;
//       }
//     });
// }
// showDetailsButton.addEventListener("click", () => {
//   const userName = userNameInput.value;
//   //request the data from server
//   let response = fetch(`https://api.github.com/users/${userName}`);
//   response
//     .then((r) => r.json())
//     .then((data) => {
//       console.log(data);
//       profileInfoDiv.innerHTML = `<div class="card">
//           <div class="card-img">
//             <img
//               src=${data.avatar_url}
//               alt=${data.name}
//             />
//           </div>
//           <div class="card-body">
//             <div class="card-title">${data.name}</div>
//             <div class="card-subHeading">${data.login}</div>
//             <div class="card-text">
//              <p>${data.bio}</p>
//              <p>${data.followers} followers ${data.following} following
//             </div>
//             <button>
//             <a href=${data.html_url}>
//             Do Checkout Project
//             </a>
//             </button>
//           </div>
//         </div>`;
//       showReposInfo(userName);
//     });
// });