//? Write a code that prints a multiplication table of numbers 1 to 10

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    let result = i * j;
    console.log(`${i} x ${j} = ${result}`);
  }
}
