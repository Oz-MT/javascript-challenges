//? Write a JavaScript program to find the most frequent item of an array.
//? Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//? Sample Output : a ( 5 times )

const arr1 = [3, "c", "c", "c", 2, 3, "c", 3, "c", "c", 2, 4, 9, 3];

const unique = new Set(arr1);
const arrUnique = Array.from(unique);
let count = 0;
let result = "";

const frequent = (arr) => {
  for (let i = 0; i < arrUnique.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arrUnique[i] == arr[j]) {
        count++;
      }
    }
    result += `${Number(count)}`;
    count = 0;
  }
  const newArr = result.split("");
  const string = newArr.join("");
  const maxi = Math.max(...newArr);
  const index = string.indexOf(maxi);
  return `${arrUnique[index]} (${maxi} times)`;
};

console.log(frequent(arr1));

// function count(arr) {
//   let most;
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let counter = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] === arr[i]) {
//         counter++;
//       }
//     }
//     if (counter > highest) {
//       most = arr[i];
//       highest = counter;
//     }
//   }
//   return `${most}, ${highest} times`;
// }

// console.log(count(arr1));
