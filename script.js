const nat = document.querySelector(".result__text");
const txt = document.querySelector(".text");

const num1 = document.querySelector(".num_1");
const num2 = document.querySelector(".num_2");
const num3 = document.querySelector(".num_3");
const num4 = document.querySelector(".num_4");
const num5 = document.querySelector(".num_5");
const num6 = document.querySelector(".num_6");
const num7 = document.querySelector(".num_7");
const num8 = document.querySelector(".num_8");
const num9 = document.querySelector(".num_9");
const num0 = document.querySelector(".num_0");
const qosh = document.querySelector(".qosh");
const ayir = document.querySelector(".ayir");
const kopaytir = document.querySelector(".kopaytir");
const qoldiq = document.querySelector(".qoldiq");
const clear = document.querySelector(".clear");
const nuqta = document.querySelector(".nuqta");
const teng = document.querySelector(".teng");
const plus_minus = document.querySelector(".plus_minus");
const bol = document.querySelector(".bolish");

let check = true;
num0.addEventListener("click", () => {
  nat.textContent += 0;
  check = true;
});
num1.addEventListener("click", () => {
  nat.textContent += 1;
  check = true;
});
num2.addEventListener("click", () => {
  nat.textContent += 2;
  check = true;
});
num3.addEventListener("click", () => {
  nat.textContent += 3;
  check = true;
});
num4.addEventListener("click", () => {
  nat.textContent += 4;
  check = true;
});
num5.addEventListener("click", () => {
  nat.textContent += 5;
  check = true;
});
num6.addEventListener("click", () => {
  nat.textContent += 6;
  check = true;
});
num7.addEventListener("click", () => {
  nat.textContent += 7;
  check = true;
});
qosh.addEventListener("click", () => {
  if (check) {
    nat.textContent += " " + "+" + " ";
    check = false;
  }
});
num8.addEventListener("click", () => {
  nat.textContent += 8;
  check = true;
});
num9.addEventListener("click", () => {
  nat.textContent += 9;
  check = true;
});
bol.addEventListener("click", () => {
  if (check) {
    nat.textContent += " " + "/" + " ";
    check = false;
  }
});
kopaytir.addEventListener("click", () => {
  if (check) {
    nat.textContent += " " + "*" + " ";
    check = false;
  }
});
qoldiq.addEventListener("click", () => {
  if (check) {
    nat.textContent += " " + "%" + " ";
    check = false;
  }
});
ayir.addEventListener("click", () => {
  if (check) {
    nat.textContent += " " + "-" + " ";
    check = false;
  }
});
nuqta.addEventListener("click", () => {
  if (check) {
    nat.textContent += ".";
    check = false;
  }
});
clear.addEventListener("click", () => {
  nat.textContent = "";
  check = true;
});
teng.addEventListener("click", () => {
  // nat.textContent = eval(nat.textContent);
  let arr = nat.textContent.split(" ");
  for (let i = 0; i < arr.length + 1; i++) {
    if (arr[i] == "%") {
      let sum = Number(arr[i - 1] / 100) * Number(arr[i + 1]);
      arr.splice(i - 1, 3, sum);
      i = 0;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "/") {
      let sum = Number(arr[i - 1]) / Number(arr[i + 1]);
      arr.splice(i - 1, 3, sum);
      i = 0;
    }
  }
  for (let i = 0; i < arr.length + 1; i++) {
    if (arr[i] == "*") {
      let sum = Number(arr[i - 1]) * Number(arr[i + 1]);
      arr.splice(i - 1, 3, sum);
      i = 0;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "+") {
      let sum = Number(arr[i - 1]) + Number(arr[i + 1]);
      arr.splice(i - 1, 3, sum);
      i = 0;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "-") {
      let sum = Number(arr[i - 1]) - Number(arr[i + 1]);
      arr.splice(i - 1, 3, sum);
      i = 0;
    }
  }
  nat.textContent = arr.join("");
});
