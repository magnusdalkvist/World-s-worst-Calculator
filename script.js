let first = "";
let second = "";
let result = "";
let resultsContainer = document.querySelector("#results");

document.querySelector("#calculate").addEventListener("click", calculate);

function calculate() {
  first = Number(document.querySelector("#firstnumber").value);
  second = Number(document.querySelector("#secondnumber").value);
}
