//? Write a JavaScript function to extract a specified number of characters from a string.
//? Example:
//? func("Clarusway",6)
//? Output:
//? “Clarus"

const sliced = (str, num) => {
  return str.slice(0, num);
};

console.log(sliced("Clarusway", 3));
