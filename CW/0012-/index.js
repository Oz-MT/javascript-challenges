//? Write a JavaScript program to find a value that is nearest to 100 from two different given integer values.

const num1 = parseInt(prompt("Enter first number"));
const num2 = parseInt(prompt("Enter second number"));

if (Math.abs(100 - num1) < Math.abs(100 - num2)) {
  console.log(`The number ${num1} is closer to 100 according to ${num2}`);
} else if (Math.abs(100 - num2) < Math.abs(100 - num1)) {
  console.log(`The number ${num2} is closer to 100 according to ${num1}`);
}
