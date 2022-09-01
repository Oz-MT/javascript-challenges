//? Write a Function that takes 2 parameters (amount and rate) to convert currency.
//? Example:
//? Amount = 1000    rate = 1.5     should return 1500 as amount x rate is equal to 1500

const amountRate = (amount, rate) => {
  const result = amount * rate;
  return result;
};

console.log(amountRate(1000, 1.5));
