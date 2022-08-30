//? */ Write a JavaScript program to determine a year is a leap year in the Gregorian calendar. (Please search the conditions for the leap year)

const num = prompt("Bir sayı giriniz?");

if ((num % 400 == 0 || num % 100 != 0) && num % 4 == 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}

// 1900, 1700, 1893 not leap year
// 2000, 2004; leap year
