let first = "";
let second = "";
let result = "";
let resultsContainer = document.querySelector("#results");

document.querySelector("#calculate").addEventListener("click", calculate);
document.querySelector("#clear").addEventListener("click", clear);

function calculate() {
  first = Number(document.querySelector("#firstnumber").value);
  second = Number(document.querySelector("#secondnumber").value);

  let operator = document.querySelector("#operator").value;
  if (operator == "add") {
    result = first + second;
  } else if (operator == "sub") {
    result = first - second;
  } else if (operator == "mul") {
    result = first * second;
  } else {
    result = first / second;
  }

  let doround = document.querySelector("#doround").checked;
  let decimals = document.querySelector("#decimals").value;
  if (doround == true) {
    result = result.toFixed(decimals);
  }

  resultsContainer.innerHTML += `<li>${result}</li>`;
  resultsContainer.scrollTop += resultsContainer.scrollHeight;
  document.querySelector("#firstnumber").value = result;
}

function clear() {
  resultsContainer.innerHTML = "";
  document.querySelector("#firstnumber").value = "";
  document.querySelector("#secondnumber").value = "";
}
