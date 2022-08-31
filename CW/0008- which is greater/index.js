//? Write a JavaScript program that takes two integers from a user and displays the larger.

const num1 = parseInt(prompt("Please enter a number"));
const num2 = parseInt(prompt("Please enter a number"));

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else if (num2 > num1) {
  console.log(`${num2} is greater than ${num1}`);
}
