//? Write a code that displays the factors of a number entered by the user.
//? Example:
//? number = 12 ==> factors are 2,3,4,6

let num;

while (isNaN(num) || num <= 0) {
  num = parseInt(prompt("Enter a valid number"));
}

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    console.log(`${i} is a factor of ${num}`);
  }
}
