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
