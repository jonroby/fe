// Solution 2

function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() { this.score++ },
  login: function() { console.log("Logged In!"); }
}

const user1 = userCreator("Phil", 4);

// __proto__ will keep searching for methods.

// Also keep in mind that when you call a method, the execution will have
// this be set to the object calling the method. So user1.method, the
// EC will set this to user1.


