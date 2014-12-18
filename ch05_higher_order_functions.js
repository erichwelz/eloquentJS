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

Life expectancy by century:

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100)
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

//Every and some methods

// Your code here.
function every(arr, check) {
  for (var i = 0; i < arr.length; i++) {
    if (!check(arr[i])) {
      return false;
    }
  }
  return true;
};

function some(arr, check) {
  for (var i = 0; i < arr.length; i++) {
    if (check(arr[i])) {
      return true;
    }
  }
  return false;
};

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false