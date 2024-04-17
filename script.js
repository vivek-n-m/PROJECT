let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  const display = document.getElementById("display");
  currentNumber += number;
  display.value = currentNumber;
}

function appendOperator(op) {
  if (currentNumber === "") {
    return;
  }
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  const display = document.getElementById("display");
  display.value = "";
}

function calculate() {
  if (currentNumber === "" || operator === "") {
    return;
  }

  let result;
  const currentNum = parseFloat(currentNumber);

  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + currentNum;
      break;
    case "-":
      result = parseFloat(previousNumber) - currentNum;
      break;
    case "*":
      result = parseFloat(previousNumber) * currentNum;
      break;
    case "/":
      if (currentNum === 0) {
        alert("Error: Division by zero!");
        return;
      }
      result = parseFloat(previousNumber) / currentNum;
      break;
  }

  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  const display = document.getElementById("display");
  display.value = currentNumber;
}
