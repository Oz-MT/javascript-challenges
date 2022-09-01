//? Write a JavaScript function to hide email addresses to protect them from unauthorized users. Hint: Just display half of the characters before the @ sign in the email address
//? Example:
//? func(“barry@gmail.com”)
//? Output:
//? “ba***@gmail"
//? Example:
//? func(“johndoe@gmail.com”)
//? Output:
//? “joh****@gmail"

const hide = (email) => {
  const where = email.indexOf("@");
  const first =
    email.slice(0, Math.floor(where / 2)) + "***" + email.slice(where);
  return first;
};

console.log(hide("barry@gmail.com"));
