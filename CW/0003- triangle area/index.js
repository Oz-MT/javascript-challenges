//? Write a JavaScript code to find the area of a triangle.

// const triangleArea = (taban, yükseklik) => {
//   return (taban * yükseklik) / 2;
// };

// console.log(triangleArea(10, 5));

const triangleArea = (a, b, c) => {
  let s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
};

console.log(triangleArea(6, 8, 10));
