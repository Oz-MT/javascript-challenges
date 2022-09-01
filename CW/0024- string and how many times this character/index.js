//? You have given a string and character. Write a function to check the string and find how many times this character occurs in this string.
//? Example:
//? str = “Clarusway”         char = “a”       ===> result = 2      as “a” occurs 2 times in Clarusway
let count = 0;
const charCount = (str, char) => {
  if (str.includes(char)) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == char) {
        count++;
      }
    }
    return count;
  } else {
    return `There is no ${char} char in ${str}`;
  }
};

console.log(charCount("clarusway", "a")); // 2
