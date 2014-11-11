//flattening with reduce

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here

console.log(arrays.reduce(function(output, current) {
  return output.concat(current);
}, []));
// → [1, 2, 3, 4, 5, 6]