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

// let num1, num2, operand;
// while (isNaN(num1) || isNaN(num2)) {
//     num1 = parseInt(prompt("Enter first number: \n(reset upon failure)"));
//     num2 = parseInt(prompt("Enter second number: \n(reset upon failure)"));
// }
// while (operand != "+" && operand != "-" && operand != "*" && operand != "/") {
//     operand = prompt("Enter '+', '-', '*' or '/': ");
// }
// console.log(
//     operand == "+"
//         ? `${num1} + ${num2} = ${num1 + num2}`
//         : operand == "-"
//         ? `${num1} - ${num2} = ${num1 - num2}`
//         : operand == "*"
//         ? `${num1} * ${num2} = ${num1 * num2}`
//         : `${num1} / ${num2} = ${num1 / num2}`
// );
