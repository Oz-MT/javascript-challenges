//? Write a basic Calculator with JavaScript. Ask the user to enter 2 numbers and an operand (+,-,*,/). Execute the desired operation and display the result.
//? Example:
//? number1 = 5, number2 = 6, operand = * ⇒ result is 5 * 6 = 30

const num1 = parseFloat(prompt("Enter first valid number"));
const num2 = parseFloat(prompt("Enter second valid number"));
const operand = prompt("Enter an operand (+, -, *, /)");

if (operand == "+") {
  console.log((num1 + num2).toFixed(1));
} else if (operand == "-") {
  console.log(num1 - num2.toFixed(1));
} else if (operand == "*") {
  console.log(num1 * num2.toFixed(1));
} else if (operand == "/") {
  console.log(num1 / num2.toFixed(1));
} else {
  console.log("Something went wrong");
}
