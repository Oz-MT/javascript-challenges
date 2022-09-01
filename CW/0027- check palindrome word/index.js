//? A palindrome word is a sequence of characters that reads the same backward as forward, such as madam, racecar.
//? Define a function to check whether a word is a palindrome or not.

const palindromeCheck = (str) => {
  const normal = str.slice(0);
  const reversed = str.split("").reverse().join("");
  if (normal == reversed) {
    return true;
  } else {
    return false;
  }
};

console.log(palindromeCheck("madam"));

//* ---------------------------

// function palindrome(str) {
//   let palin = str.toLowerCase();
//   for (let i = 0; i < palin.length; i++) {
//       if (palin.charAt(i) != palin.charAt(palin.length - i - 1)) {
//           return false;
//       }
//   }
//   return true;
// }
