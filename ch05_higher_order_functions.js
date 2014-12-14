//flattening with reduce

var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here

console.log(arrays.reduce(function(output, current) {
  return output.concat(current);
}, []));
// → [1, 2, 3, 4, 5, 6]

// Reduce the multiplication of a series numbers

nums = [1,2,3,4,5,6];

console.log(nums.reduce(function(a,b){
  return a * b;
  })
);


//mother-child age difference

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
    //with known mother
  return byName[person.mother] != null;
}).map(function(person) {
    //gap between birth of mother and offspring
  return person.born - byName[person.mother].born;
});

console.log(average(differences));
// → 31.2