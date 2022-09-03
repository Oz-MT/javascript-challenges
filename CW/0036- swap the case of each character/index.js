//? Write a JavaScript program that accepts a string as input and swap the case of each character. For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const str1 =
  "if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX";
let newStr = "";
const convert = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      newStr += str[i].toUpperCase();
    } else if (str[i] != str[i].toLowerCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(convert(str1));

//* --------------------------------

// function swap(str) {
//   let answer = "";
//   for (let i = 0; i < str.length; i++) {
//       str[i] == str[i].toLowerCase()
//           ? (answer += str[i].toUpperCase())
//           : (answer += str[i].toLowerCase());
//   }
//   return answer;
// }
