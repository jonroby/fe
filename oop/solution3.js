const user1 = new userCreator("Phil", 4);

// Challenges:
// How to refer to user1? this
// Where does bond come from?

// Interlude
// functions are both objects and functions
// In OOP you will absolutely use the function's object form
// To access function use parens
// For object use dot notation

function multiplyBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5;
multiplyBy2(3);

multiplyBy2.stored;
multiplyBy2.prototype;

// functions have by default a property on their object version known as
// a prototype, which is itself an object to replace our user function
// store object.


