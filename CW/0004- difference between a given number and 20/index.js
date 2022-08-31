//? Write a JavaScript program to display the difference between a given number and 20, if the number is greater than 20 display double the absolute difference.
//? Examples:
//? number is 15 ==> display 5 as 20-15 = 5
//? number is 35 ==> display 30 as (35-20) * 2 = 30

const num = parseInt(prompt("Enter a number?"));

if (num <= 20) {
  console.log(20 - num);
} else if (num > 20) {
  console.log((num - 20) * 2);
}
