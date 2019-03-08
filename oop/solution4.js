// What if we want to organize our code inside one of our shared
// functions - perhaps by defining a new inner function.

function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  function add1() {
    this.score++;
  }

  add1();
}

UserCreator.prototype.login = function() {
  console.log("login");
}

const user1 = new UserCreator("Eva", 9);

user1.increment();

// -- With classes

class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }

  login() {
    console.log("login");
  }
}

const user1 = new UserCreator("Eva", 9);
user.increment();
