let first = "";
let second = "";
let result = "";
let resultsContainer = document.querySelector("#results");

document.querySelector("#calculate").addEventListener("click", calculate);

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
}
