//? Ask the user to input a number. Check the input of the user, if it is not a valid number then keep getting input from the user until provides a valid number.

let num;
while (isNaN(num)) {
  num = parseFloat(prompt("Enter a valid number"));
}
console.log("You entered valid number, thank you");
// console.log(typeof num);
// console.log(num);
