// Solution 1: Generate objects using a function
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  }
  return newUser;
}

const user1 = userCreator("Phil", 4);

// This has the drawback that copies are made of the increment function
// for every object!
