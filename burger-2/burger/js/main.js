const qS = (selector) => document.querySelector(selector);
const qSAll = (selector) => document.querySelectorAll(selector);

const mainBtn = qS("#main-action-button");

mainBtn.onclick = () => {
  qS("#products").scrollIntoView({ behavior: "smooth" });
};

const menuItems = qSAll(".menu-item > a ");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = () => {
    // why
    // products
    // order
    qS("#" + menuItems[i].getAttribute("data-link")).scrollIntoView({
      behavior: "smooth",
    });
  };
}

const inputBurger = qS("#burger");

const inputName = qS("#name");
const inputNumber = qS("#number");
const orderBtn = qS("#order-action");

orderBtn.onclick = () => {
  let hasError = false;
  [inputBurger, inputName, inputNumber].forEach((item) => {
    if (!item.value) {
      hasError = true;
      item.parentElement.style.background = "red";
    } else {
      item.parentElement.style.background = " none";
    }
  });
  if (!hasError) {
    alert("Спасибо за ваш заказ. Мы скоро с вами свзяжемся");
  }
  inputBurger.value = "";
  inputName.value = "";
  inputNumber.value = "";
};

const inputImage = qS("image");
const inputTitle = qS("title");
const inputDescription = qS("description");
const inputGram = qS("gram");

const btnPlus = qS(".main-small-info");
const modal = qS("#modal");

btnPlus.onclick = () => {
  modal.style.display = "block";
  modal.styl.transition = " opacity .10s";
};

const btnModal = qS(".btn-modal");

btnModal.addEventListener("click", () => {
  modal.style.display = "none";
  modal.styl.transition = " opacity .10s";
});

// const productsData = [
//   {
//     productName: "Бургер чеддер & бекон",
//     img: "Burger-1.png",
//     productDescription: `Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус`,
//     productPrice: 8,
//     productGram: 358,
//   },
//   {
//     productName: "Бургер чеддер & бекон",
//     img: "Burger-2.png",
//     productDescription: `Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус`,
//     productPrice: 9,
//     productGram: 358,
//   },
//   {
//     productName: "Бургер чеддер & бекон",
//     img: "Burger-3.png",
//     productDescription: `Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус`,
//     productPrice: 10,
//     productGram: 358,
//   },
// ];

const productsDiv = qS(".products-items");

function renderProducts(productsData = []) {
  productsDiv.innerHTML = "";
  for (const item of productsData) {
    productsDiv.innerHTML += `
    <div class="products-item">
   <div class="products-item-image">
    <img src="${item.image}" alt="" />
   </div>
   <div class="products-item-title">${item.title} </div>
   <div class="products-item-text">
   ${item.text}
   </div>
   <div class="products-item-extra">
    <div class="products-items-info">
     <div class="products-item-price" data-base-price="${item.basePrice} ">${item.price} $</div>
     <div class="products-item-weight">${item.grams} гр</div>
    </div>
    <div class="products-item-actions">
     <button class="btn product-btn">
      <span>Заказать</span>
      <svg
       width="24"
       height="25"
       viewBox="0 0 24 25"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M17 18.5C17.5304 18.5 18.0391 18.7107 18.4142 19.0858C18.7893 19.4609 19 19.9696 19 20.5C19 21.0304 18.7893 21.5391 18.4142 21.9142C18.0391 22.2893 17.5304 22.5 17 22.5C16.4696 22.5 15.9609 22.2893 15.5858 21.9142C15.2107 21.5391 15 21.0304 15 20.5C15 19.39 15.89 18.5 17 18.5ZM1 2.5H4.27L5.21 4.5H20C20.2652 4.5 20.5196 4.60536 20.7071 4.79289C20.8946 4.98043 21 5.23478 21 5.5C21 5.67 20.95 5.84 20.88 6L17.3 12.47C16.96 13.08 16.3 13.5 15.55 13.5H8.1L7.2 15.13L7.17 15.25C7.17 15.3163 7.19634 15.3799 7.24322 15.4268C7.29011 15.4737 7.3537 15.5 7.42 15.5H19V17.5H7C6.46957 17.5 5.96086 17.2893 5.58579 16.9142C5.21071 16.5391 5 16.0304 5 15.5C5 15.15 5.09 14.82 5.24 14.54L6.6 12.09L3 4.5H1V2.5ZM7 18.5C7.53043 18.5 8.03914 18.7107 8.41421 19.0858C8.78929 19.4609 9 19.9696 9 20.5C9 21.0304 8.78929 21.5391 8.41421 21.9142C8.03914 22.2893 7.53043 22.5 7 22.5C6.46957 22.5 5.96086 22.2893 5.58579 21.9142C5.21071 21.5391 5 21.0304 5 20.5C5 19.39 5.89 18.5 7 18.5ZM16 11.5L18.78 6.5H6.14L8.5 11.5H16Z"
        fill="#191411"
       />
      </svg>
     </button>
    </div>
   </div>
  </div>
    `;
  }
}

let btnChangeCurrency = qS("#change-currency");
let prices = qSAll(".products-item-price");
let products = qSAll(".products-item-title");
let buttons = [];
async function getBurgers() {
  const request = await fetch(
    "https://testologia.site/burgers-data?extra=black"
  );
  // const request = await fetch('https://testologia.site/burgers-data')
  const response = await request.json();
  renderProducts(response);
  buttons = qSAll(".product-btn");
  products = qSAll(".products-item-title");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      inputBurger.value = products[i].innerText;
      qS(".order").scrollIntoView({ behavior: "smooth" });
    };
  }
  btnChangeCurrency = qS("#change-currency");
  prices = qSAll(".products-item-price");
  btnChangeCurrency.onclick = () => {
    let currentCurrency = btnChangeCurrency.innerText;
    let newCurrency = "$";
    let coefficient = 1;
    if (currentCurrency === "$") {
      newCurrency = "₽";
      coefficient = 84.09;

      // alert('your currency change to ' {newCurrency} )
    } else if (currentCurrency === "₽") {
      newCurrency = "€";
      coefficient = 0.92;
    } else if (currentCurrency === "€") {
      newCurrency = "s";
      coefficient = 87;
    }
    btnChangeCurrency.innerText = newCurrency;
    prices.forEach(
      (el) =>
        (el.innerText =
          +(el.getAttribute("data-base-price") * coefficient).toFixed(1) +
          " " +
          newCurrency)
    );
    qS("#products").scrollIntoView({ behavior: "smooth" });
  };
}

getBurgers();
