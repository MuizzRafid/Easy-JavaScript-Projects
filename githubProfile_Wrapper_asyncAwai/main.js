console.log("lol");

const userNameInput = document.getElementById("userName");
const showDetailsButton = document.getElementById("showDetails");
const profileInfoDiv = document.getElementById("profileInfo");
const repoInfoDiv = document.getElementById("reposInfo");

//                                          ****** using async await

showDetailsButton.addEventListener("click", async () => {
  const userName = userNameInput.value;

  //request the data from server
  let response = await fetch(`https://api.github.com/users/${userName}`);

  const data = await response.json();
  showReposInfo(userName);
  showProfile(data);
});

function showProfile(data) {
  console.log(data);
  profileInfoDiv.innerHTML = `<div class="card">
        <div class="card-img">
          <img
            src=${data.avatar_url}
            alt=${data.name}
          />
        </div>
        <div class="card-body">
          <div class="card-title">${data.name}</div>
          <div class="card-subHeading">${data.login}</div>
          <div class="card-text">
           <p>${data.bio}</p>
           <p>${data.followers} followers ${data.following} following
          </div>
          <button>
          <a href=${data.html_url}>
          Do Checkout Project
          </a>
          </button>
        </div>
      </div>`;
}

async function showReposInfo(userName) {
  const res = await fetch(`https://api.github.com/users/${userName}/repos`);
  const p = await res.json();

  for (let i = 0; i < p.length; i++) {
    repoInfoDiv.innerHTML += `<div class="card">

          <div class="card-body">
            <div class="card-title">${p[i].name}</div>
            <div class="card-subHeading">${p[i].language}</div>
            <div class="card-text">
             <button>
             <a href=${p[i].html_url}>
             DO Checkout Project
             </a>
             </button>
            </div>
          </div>
        </div>`;
  }
}

//                                     ***** using then and catch

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
