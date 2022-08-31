//? Write a JavaScript program that tells the user provided number is odd or even.

let num;
while (isNaN(num)) {
  num = parseInt(prompt("Enter a valid number:"));
}

// const num = parseInt(prompt("Enter a valid number"));

const oddEven = num % 2 != 0 ? `${num} is odd` : `${num} is even`;
console.log(oddEven);
