const div = document.querySelector("#div");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const ssd = document.querySelector("#ssd");
const color = document.querySelector("#color");
const phoneIcon = document.querySelector("#phone-icon");
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");

const baseURL = "./package.json";
console.log("./package.json");

function fetchPhones() {
  fetch("./package.json")
    .then((response) => response.json())
    .then((phoneData) => {
      console.log(phoneData);
    });
}
fetchPhones();

btn.onclick = () => {
  if (input.value.trim().toLowerCase()) {
    fetch("./package.json" + input.value)
      .then((res) => res.json())
      .then((phones) => {
        console.log(phones);
        phoneCard(phones)
      });
  }
};

function phoneCard(data) {
  div.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    div.innerHTML += `
        <div class="card" style="width: 18rem;">
             <img id="phone-icon" src="${data[i].img}" alt="">
            <div>
            <h3 id="name">Name: ${data[i].name}</h3>
             <p id="price">Price: ${data[i].price}</p>
             <p id="ssd">Ssd: ${data[i].ssd}</p>
             <p id="color">Color: ${data[i].color}</p>
            </div>
        </div>
        `;
  }
}

