//? Write a JavaScript function to convert a string into a title format (The first letters of each word should be in capital letters)
let title = "";
const titleForm = (str) => {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    title += arr[i][0].toUpperCase() + arr[i].slice(1) + " ";
  }
  return title;
};

console.log(titleForm("merhabalar ben mark"));
