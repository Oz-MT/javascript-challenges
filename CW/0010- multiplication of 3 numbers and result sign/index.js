//? Write a JavaScript program that takes 3 integers from a user, multiplies all these numbers, and displays the sign of the product.
//? Example1:
//? number1 = 5, number2 = -4, number3 = 2 ⇒ product is -40. Then the sign is “-”
//? Example2:
//? number1 = -5, number2 = -4, number3 = 2 ⇒ product is 40. Then the sign is “+”

const num1 = parseInt(prompt("Enter first number"));
const num2 = parseInt(prompt("Enter second number"));
const num3 = parseInt(prompt("Enter third number"));

const multiple = num1 * num2 * num3;

if (multiple < 0) {
  console.log(`Product is ${multiple}. Then the sign is "-"`);
} else if (multiple > 0) {
  console.log(`Product is ${multiple}. Then the sign is "+"`);
} else {
  alert("Something went wrong");
}
