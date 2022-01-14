const d = document;
const button = d.querySelectorAll(".button"),
  buttonSpan = d.querySelectorAll(".button span"),
  buttonRaiz = d.querySelector(".raiz"),
  input = d.querySelector(".input input");

let firstValue, secondValue, result;

const finishResults = () => {
  if (input.value.indexOf("+") !== -1) {
    let array = input.value.split("+");
    result = parseFloat(array[0]) + parseFloat(array[1]);
    input.value = result;
  }

  if (input.value.indexOf("*") !== -1) {
    let array = input.value.split("*");
    result = parseFloat(array[0]) * parseFloat(array[1]);
    input.value = result;
  }

  if (input.value.indexOf("/") !== -1) {
    let array = input.value.split("/");
    result = parseFloat(array[0]) / parseFloat(array[1]);
    input.value = result;
  }

  if (input.value.indexOf("-") !== -1) {
    let array = input.value.split("-");
    result = parseFloat(array[0]) - parseFloat(array[1]);
    input.value = result;
  }

  if (input.value.indexOf("^") !== -1) {
    let array = input.value.split("^");
    result = Math.pow(parseFloat(array[0]), parseFloat(array[1]));
    input.value = result;
  }

  if (input.value.indexOf(`${buttonRaiz.textContent}`) !== -1) {
    let array = input.value.split(`${buttonRaiz.textContent}`);
    result = Math.sqrt(parseFloat(array[1]));
    input.value = result;
    //console.log(result);
  }

  if (input.value === "Math Error") return (input.value = "");
  if (input.value === "") return (input.value = "");
  if (input.value === "undefined") return (input.value = "");
  if (input.value === "NaN") {
    return (input.value = "Math Error");
  } else {
    return (input.value = result);
  }
};

const validationOperators = () => {
  if (
    input.value[input.value.length - 1] === "+" ||
    input.value[input.value.length - 1] === "-" ||
    input.value[input.value.length - 1] === "/" ||
    input.value[input.value.length - 1] === "*" ||
    input.value[input.value.length - 1] === "^"
  ) {
    input.value = input.value.slice(0, -1);
  }
  input.value = input.value + e.key;
};

// Listener para agregar un valor al presionar un button
document.addEventListener("click", (e) => {
  if (e.target.matches(".button") || e.target.matches(".button span")) {
    if (e.target.textContent === "C") input.value = "";
    if (
      input.value[input.value.length - 1] === "+" ||
      input.value[input.value.length - 1] === "-" ||
      input.value[input.value.length - 1] === "/" ||
      input.value[input.value.length - 1] === "*" ||
      input.value[input.value.length - 1] === "^" ||
      input.value[input.value.length - 1] === "." ||
      input.value[input.value.length - 1] === `${buttonRaiz.textContent}`
    ) {
      if (
        e.target.textContent === "+" ||
        e.target.textContent === "-" ||
        e.target.textContent === "*" ||
        e.target.textContent === "/" ||
        e.target.textContent === "xy" ||
        e.target.textContent === "." ||
        e.target.textContent === `${buttonRaiz.textContent}`
      ) {
        input.value = input.value.slice(0, -1);
      } else {
        let number = e.target.textContent;
      }
    }
    number = e.target.textContent;
    if (number === "xy") number = "^";
    if (number === "C") number = "";
    if (number === "=") {
      input.value = input.value;
    } else {
      input.value = input.value + number;
    }
    if (e.target.textContent === "=") {
      finishResults();
    }
    //console.log(number);
    input.focus();
  }
});

d.addEventListener("keydown", (e) => {
  if (e.target.matches(`.input input`)) {
    //console.log(e.key);
    e.preventDefault();
    switch (e.key) {
      case "0":
        input.value = input.value + Number(e.key);
        break;
      case "1":
        input.value = input.value + Number(e.key);
        break;
      case "2":
        input.value = input.value + Number(e.key);
        break;
      case "3":
        input.value = input.value + Number(e.key);
        break;
      case "4":
        input.value = input.value + Number(e.key);
        break;
      case "5":
        input.value = input.value + Number(e.key);
        break;
      case "6":
        input.value = input.value + Number(e.key);
        break;
      case "7":
        input.value = input.value + Number(e.key);
        break;
      case "8":
        input.value = input.value + Number(e.key);
        break;
      case "9":
        input.value = input.value + Number(e.key);
        break;
      case "+":
        validationOperators();
        break;
      case "-":
        validationOperators();
        break;
      case "*":
        validationOperators();
        break;
      case "/":
        validationOperators();
        break;
      case "c":
        input.value = "";
        break;
      case "Backspace":
        input.value = input.value.slice(0, -1);
        break;
      case "Enter":
        finishResults();
        break;
      default:
        input.value = input.value;
        break;
    }
  }
});
