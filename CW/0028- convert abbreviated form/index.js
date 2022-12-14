//? Write a JavaScript function to convert a string into an abbreviated form.
//? Example:
//? func(“John Doe”)
//? Output:
//? “John D."      (Doe is abbreviated as D.)
//? Example:
//? func(“John”)
//? Output:
//? “John"        (Nothing to abbreviate)
//? Example:
//? func(“John Doe Marcus”)
//? Output:
//? “John D."   (Doe Marcus  is abbreviated as D.

const abbreviated = (str) => {
  if (str.includes(" ")) {
    const where = str.indexOf(" ");
    const first = str.slice(0, where);
    const second = str.slice(where + 1, where + 2) + ".";
    return `${first} ${second}`;
  } else {
    return str;
  }
};

console.log(abbreviated("John Doe Marcus"));
