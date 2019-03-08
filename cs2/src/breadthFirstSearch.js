// iterative
// const breadthFirstTraverse = (queue, array) => {
//   while (queue.length > 0) {
//     const node = queue.shift();
//     array.push(node.value);
//     if (node.left) queue.push(node.left);
//     if (node.right) queue.push(node.right);
//   }
//   return array;
// };

// recursive
const breadthFirstTraverse = (queue, array) => {
  if (queue.length === 0) return array;
  const node = queue.shift();
  array.push(node.value);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);

  return breadthFirstTraverse(queue, array);
};

const tree = {
  value: "A",
  left: {
    value: "B",
    left: {
      value: "D",
      left: {
        value: "G",
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: "E",
      left: null,
      right: {
        value: "H",
        left: {
          value: "K",
          left: null,
          right: null
        }
      }
    }
  },
  right: {
    value: "C",
    left: {
      value: "F",
      left: {
        value: "I",
        left: null,
        right: null
      },
      right: {
        value: "J",
        left: null,
        right: null
      }
    },
    right: null
  }
};

console.log(breadthFirstTraverse([tree], []));

module.exports = breadthFirstTraverse;
