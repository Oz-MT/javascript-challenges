//? You have given a string and character. Write a function to check the string and find how many times this character occurs in this string.
//? Example:
//? str = “Clarusway”         char = “a”       ===> result = 2      as “a” occurs 2 times in Clarusway
let count = 0;
const charCount = (string, char) => {
  const arr = String(string).split("");
  if (arr.includes(char)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == char) {
        count++;
      }
    }
    return count;
  } else {
    return `There is no ${char} char in ${string}`;
  }
};

console.log(charCount("clarusway", "a")); // 2
