//? Write a JavaScript program that takes 3 integers from a user and displays the largest. (Same question, but this time with 3 numbers)

const num1 = parseInt(prompt("Enter first number"));
const num2 = parseInt(prompt("Enter second number"));
const num3 = parseInt(prompt("Enter third number"));

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is the biggest`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is the biggest`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`${num3} is the biggest`);
} else {
  alert("Please enter all as number");
}
