// sum of a range

function range(start, end) {
  var arr = [];
  var index = 0;
  for (start; start <= end; start++) {
    arr[index] = start;
    index += 1;
  }
  return arr;
}

function sum(arr) {
  var total = 0
  for (var i = 1; i <= arr.length; i++) {
  total += arr[i - 1];
  }
  return total;
}

console.log(sum(range(1, 10)));

//sum of range v2

function range(start, end) {
  var arr = [];
  for (var i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr;
}

function sum(arr) {
  var total = 0
  for (var i = 0; i < arr.length; i++) {
  total += arr[i];
  }
  return total;
}

console.log(sum(range(1, 10)));

//range accepts negative steps

function range(start, end, step) {
  if (step == null) step = 1;
  var arr = [];
  if (step >= 1) {
    for (var i = start; i <= end; i += step)
      arr.push(i);
    } else {
    for (var i = start; i >= end; i += step)
      arr.push(i);
   }
  return arr;
  }

console.log(range(5, 2, -1))

//reversing an array

function reverseArray(arrin) {
  arrout = [];
  for (var i = arrin.length - 1; i >= 0; i--) {
    arrout.push(arrin[i]);
  }
  return arrout;
}

//reversing an array in place


function reverseArrayInPlace(arr) {
  for (var i = Math.floor((arr.length /2 )) - 1; i >= 0; i--) {
    front = arr[i];
    back = arr[arr.length - 1 - i];
    arr[i] = back;
    arr[arr.length - 1 - i] = front;
  }
  return arr;
}

//arrays to lists and objects within objects

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list };
  }
  return list;
 }

function listToArray(list) {
  output = [];
  for (var node = list; node; node = node.rest) {
  output.push(node.value);
  }
  return output;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if ( n == 0)
    return list.value
  else
    return nth(list.rest, n - 1);
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20