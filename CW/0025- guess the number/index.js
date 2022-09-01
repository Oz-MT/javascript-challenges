//? Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
//? The user should have 5 chance to guess the number.
//? If the number entered by the user:
//? is greater than the random number then warn user to decrease,
//? is less than the random number then warn user to increase,
//? is equal to the random number then congratulate the user and tell in how many guesses were used to find the number
//? If user can’t find the number in 5 guess then game is lost and display the random number.
//? Hint: you can use this code to generate random number 0-100
//? const winingNumber = Math.round(Math.random() * 100);

let userNum;
let count = 1;
const winingNumber = Math.round(Math.random() * 100);
console.log(winingNumber);
while (count <= 5) {
  userNum = parseInt(prompt("Please enter a number between 0-100"));
  if (userNum != winingNumber) {
    count++;
    userNum < winingNumber
      ? console.log("increase your number")
      : console.log("decrease your number");
    if (count == 6) {
      console.log(`you can try max 5 times, number is ${winingNumber}`);
    }
  } else if (userNum == winingNumber) {
    console.log(`congratulates, you got it in ${count} times`);
    break;
  }
}
