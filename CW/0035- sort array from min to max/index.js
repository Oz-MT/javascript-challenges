//? Write a JavaScript program to sort the items of an array.
//? Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
//? Sample Output : -4,-3,1,2,3,5,6,7,8

//! solution with swapping method

const arr1 = [6, 4, 3, 5, 9];

function sortArray(array) {
  let temp = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
      // console.log(array);
    }
  }
  return array;
}

console.log(sortArray(arr1));
