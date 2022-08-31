//? Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

let num1, num2;

while (isNaN(num1) || isNaN(num2)) {
  num1 = parseInt(prompt("Enter first possitive valid number"));
  num2 = parseInt(prompt("Enter second possitive valid number"));
}

let smaller = num1 > num2 ? num2 : num1;

for (let i = smaller; i <= smaller; i--) {
  if (num1 % i == 0 && num2 % i == 0) {
    console.log(i);
    break;
  }
}

// let num1, num2;

// while (isNaN(num1) || isNaN(num2)) {
//   num1 = parseInt(prompt("Enter first valid number"));
//   num2 = parseInt(prompt("Enter second valid number"));
// }

// if (num1 > num2) {
//   for (let i = num2; i <= num2; i--) {
//     if (num1 % i == 0 && num2 % i == 0) {
//       console.log(i);
//       break;
//     }
//   }
// } else if (num2 > num1) {
//   for (let i = num1; i <= num1; i--) {
//     if (num1 % i == 0 && num2 % i == 0) {
//       console.log(i);
//       break;
//     }
//   }
// }
