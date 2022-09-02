//? Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers.
//? For example, if you accept 025468 the output should be 0-254-6-8.

const separeteEven = (num) => {
  let number = "";
  const arr = String(num).split("");
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 == 0 && Number(arr[i + 1]) % 2 == 0) {
      number += arr[i].concat("-");
    } else {
      number += arr[i];
    }
  }
  return number;
};

console.log(separeteEven(2546468));
