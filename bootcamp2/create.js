const userID = localStorage.getItem("_id") || null;

const form = document.querySelector("form");
const h3 = document.querySelector("#id");
const inputs = document.querySelector("input");
const btn = document.querySelector("button");

const baseURL = "https://64ab817e0c6d844abedf70f0.mockapi.io";

const api = {
  get: "/users/",
  put: "/users/",
};

if (userID) {
  h3.innerHTML = "USER ID: " + userID;
  btn.innerText = "Update";
  getUserById();
}

function getUserById() {
  fetch(baseURL + api.get + userID)
    .then(res => res.json())
    .then(resData => {
      inputs[0].value = resData.avatar;
      inputs[1].value = resData.name;
    });
}

btn.addEventListener("click", (e) => updateUser(e));

function updateUserById(event) {
  event.preventDefault();
  fetch(baseURL + api.put + userID, {
    method: "PUT",
    body: JSON.stringify({
      avatar: inputs[0].value,
      name: inputs[1].value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((upData) => {
      console.log(`update user with id ${userID}: `, upData);
      setTimeout(() => {
        location.href = "index.html";
      }, 2000);
    });
}
