const input = document.querySelector("#input");
const input3 = document.querySelector("#input-3");
const input4 = document.querySelector("#input-4");
const btnSend = document.querySelector("#button");
const btnStart = document.querySelector("#button-2");
const btn3 = document.querySelector("#button-3");
const btn4 = document.querySelector("#button-4");
const div1 = document.querySelector(".div");
const div2 = document.querySelector(".div-2");
const div3 = document.querySelector(".div-3");
const div4 = document.querySelector(".div-4");
const question1 = document.querySelector("#question1")
const question2 = document.querySelector("#question2")
const question3 = document.querySelector("#question3")
const question4 = document.querySelector("#question4")

question1.innerText = "Do you love me?"
question2.innerText = "Do you want to be with me?"
question3.innerText = "Why do you not love me?"

btnStart.onclick = () => {
  div2.style.display = "none";
  div3.style.display = "none";
  div4.style.display = "none";
  div1.style.display = "flex";
};

btnSend.onclick = () => {
  if (input.value == "yes") {
    alert("I love you too.");
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "flex";
    div4.style.display = "none";
  } else if (input.value == "no") {
    alert("(＞﹏＜)");
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "flex";
  }
  input.value = "";
};

btn3.onclick = () => {
  if (input3.value == "yes") {
    alert("Я буду ждать вас в 3-аудитории");
    div1.style.display = "none";
    div2.style.display = "flex";
    div3.style.display = "none";
    div4.style.display = "none";
  } else if (input3.value == "no") {
    alert("ook");
    div1.style.display = "none";
    div2.style.display = "flex";
    div3.style.display = "none";
    div4.style.display = "none";
  }
  input3.value = "";
};

btn4.onclick = () => {
  if ((input4.value = input4.value)) {
    alert("ook");
    div1.style.display = "none";
    div2.style.display = "flex";
    div3.style.display = "none";
    div4.style.display = "none";
  }
  input4.value = "";
};
