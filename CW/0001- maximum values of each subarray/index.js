//! This is an interview question asked by Google.drawing

//! Given an array of integers and a number k, where 1 <= k <= length of the array,
//! compute the maximum values of each subarray of length k.

//! For example;
//! given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
//! 10 = max(10, 5, 2)
//! 7 = max(5, 2, 7)
//! 8 = max(2, 7, 8)
//! 8 = max(7, 8, 7)

const arr = [10, 5, 2, 7, 8, 7];
const k = 3;
let newArr = [];

for (let i = 0; i < arr.length - (k - 1); i++) {
  newArr.push(Math.max(...arr.slice(i, i + k)));
}

console.log(newArr);
