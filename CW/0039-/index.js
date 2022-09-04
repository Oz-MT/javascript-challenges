//? Write a JS code that counts how many vowels and constants a string has that a user entered.

const vovels = ["a", "e", "i", "o", "u"];
const constants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let vovelCount = 0;
let constantCount = 0;

const count = (str) => {
  const arrStr = str.split("");
  for (let i = 0; i < arrStr.length; i++) {
    if (vovels.includes(arrStr[i].toLowerCase())) {
      vovelCount++;
    } else if (constants.includes(arrStr[i].toLowerCase())) {
      constantCount++;
    } else {
      continue;
    }
  }
  return `vovel:${vovelCount}, constant:${constantCount}`;
};

console.log(count("mErhabalar."));

//* -------------------------------------------

// const Vowels = ["A", "E", "I", "O", "U"];
// const Consonants = [
//     "B", "C", "D",  "F", "G", "J", "K", "L", "M", "N", "P", "Q", "S", "T", "V", "X", "Z", "H", "R", "W", "Y",
// ];
// function charTypeCount(str) {
//     let vowels = 0,
//         consonants = 0;
//     str.split("").forEach((x) => {
//         if (Vowels.includes(x.toUpperCase())) {
//             vowels++;
//         } else if (Consonants.includes(x.toUpperCase())) {
//             consonants++;
//         }
//     });
//     return `${vowels} vowels, ${consonants} consonants`;
// }
