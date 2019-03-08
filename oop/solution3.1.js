// complete solution 3
// What happens you declare UserCreator?
// It creates a function, but also an object: function + object.
// And that object has by default a property: prototype.
// Which is an empty object.
// To access object, you use dot notation.
// To access function, you use parens.
// The prototype is the replacement for what we used with function store.
// That's where we stored our single copies of the functions we wanted.
// new automates all of this!

function UserCreator(name, store) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  this.score++;
}

UserCreator.prototype.login = function() {
  console.log("login");
}

// 

// Alot happens here
// 1. This will mutate execution context of UserCreator.
// And in local memory will create creates an object called 'this'.
// 2. The next thing it does is add __proto__ inside of the 'this' object.
// __proto__ (dunder) is a "link" or reference to Usercreator
// 3. It will return all of this into "user1".

const user1 = new UserCreator("Eva", 9);

user1.increment();


