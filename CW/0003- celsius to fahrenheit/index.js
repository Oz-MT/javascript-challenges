//? Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

const convertTemp = (temp, type) => {
  if (type == "celsius") {
    return ((9 * temp + 32 * 5) / 5).toFixed(1) + " F";
  }
  if (type == "fahrenheit") {
    return ((5 * (temp - 32)) / 9).toFixed(1) + " C";
  }
};

console.log(convertTemp(50, "fahrenheit"));
