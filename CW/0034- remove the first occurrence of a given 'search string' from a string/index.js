//? Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
//? Example:
//? func(“Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.”, “the”)
//? Output:
//? “Full stack developers handle both frontend and backend of an app or a website. It even needs to have knowledge about the database.”
//? Explanation:
//? "the" is removed before "frontend"

const str =
  "Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.";
const partOfStr = "the";

// const removed = (sentence, search) => {
//   if (sentence.includes(search)) {
//     const index = sentence.indexOf(search);
//     const result =
//       sentence.slice(0, index - 1) + sentence.slice(index + search.length);
//     return result;
//   } else {
//     return "This sentence dont have this seacrh string";
//   }
// };

// console.log(removed(str, partOfStr));

//* ------------------------------------------

let remove1 = (str, subStr) => str.replace(subStr + " ", "");

console.log(remove1(str, partOfStr));
