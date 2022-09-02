//? Write a simple JavaScript program to join all elements of the following array into a string.
//? Sample array : myColor = ["Red", "Green", "White", "Black"];
//? Expected Output :
//? "Red, Green, White, Black"

const myColor = ["Red", "Green", "White", "Black"];

const convertString = (arr) => {
  return `"${arr.toString()}"`;
};

console.log(convertString(myColor));