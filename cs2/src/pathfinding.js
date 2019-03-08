// write in a function thats a X by X array of arrays of numbers
// as well two x/y combinations and have it return the shortest
// length (you don't need to track the actual path) from point A
// to point B.
//
// the numbers in the maze array represent as follows:
// 0 – open space
// 1 - closed space, cannot pass through. a wall
// 2 - one of the two origination points
//
// you will almost certainly need to transform the maze into your own
// data structure to keep track of all the meta data

const eightByEight = [
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 2, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 2]
];

const makeMove = (maze, [y, x], orig, count) => {
  const left = [0, -1];
  const right = [0, 1];
  const up = [-1, 0];
  const down = [1, 0];

  const steps = [left, right, up, down];

  // maze[y + up[0]][x + up[1]] = `${orig}${step}`;
  // maze[y + down[0]][x + down[1]] = `${orig}${step}`;
  // maze[y + left[0]][x + left[1]] = `${orig}${step}`;
  // maze[y + right[0]][x + right[1]] = `${orig}${step}`;
};

const findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
  const begin = eightByEight[yA][xA];

  let count = 1;
  makeMove(maze, [yA, xA], "A", count);
};

const res = findShortestPathLength(eightByEight, [1, 6], [7, 7]);
console.log("res ", eightByEight); // 16
