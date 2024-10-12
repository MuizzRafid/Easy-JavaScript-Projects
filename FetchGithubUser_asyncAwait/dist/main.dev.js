"use strict";

//https://api.github.com/users
function githubUser() {
  var response, data, display, root;
  return regeneratorRuntime.async(function githubUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.github.com/users"));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          console.log(data);
          display = "";
          data.map(function (values) {
            display += "\n      <div class=\"cards\">\n        <img\n          src=\"".concat(values.avatar_url, "\"\n          alt=\"").concat(values.login, "\"\n        />\n        <h1>").concat(values.login, "</h1>\n      </div>");
          });
          root = document.getElementById("root");
          root.innerHTML = display;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

githubUser();