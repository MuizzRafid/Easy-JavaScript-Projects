//https://api.github.com/users

async function githubUser() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  console.log(data);
  let display = "";
  data.map((values) => {
    display += `
      <div class="cards">
        <img
          src="${values.avatar_url}"
          alt="${values.login}"
        />
        <h1>${values.login}</h1>
      </div>`;
  });
  const root = document.getElementById("root");
  root.innerHTML = display;
}

githubUser();
