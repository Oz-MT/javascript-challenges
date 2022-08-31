//? Write a JavaScript program that asks the user to enter a day, check this day, and display whether a weekday or not.
//? Example1:
//? input = Tuesday ⇒ output: Tuesday is a weekday
//? Example2:
//? input = Saturday⇒ output: Saturday is not a weekday

const day = prompt("Enter a day").toLowerCase();
const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const weekend = ["sunday", "monday"];

if (weekday.includes(day)) {
  console.log(`${day} is weekday`);
} else if (weekend.includes(day)) {
  console.log(`${day} is not weekday`);
} else {
  console.log("please check the spelling of your day");
}
