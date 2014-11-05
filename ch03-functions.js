//minimum

function min(a, b) {
  if (a < b)
    return a
  else
    return b
};

// minimum with ternary #return must be at front of statement
function min(a, b) {
  return (a < b) ? a : b
};

//isEven via remainder

function isEven(number) {
 if (number % 2 == 0)
   return true
 else
   return false
}

//isEven via recursion v1


function isEven(number) {
  function find(number) {
  if (number == 0)
     return true;
  else if (number == 1)
    return false;
  else
    return find(number - 2);
  }
  return find(number);
}

//isEven via recursion v2 with negative guard

function isEven(number) {
  if (number == 0)
     return true;
  else if (number == 1)
    return false;
  else if (number < 1)
    return isEven(-number);
  else
    return isEven(number - 2);
}

//beanCounting

function countBs(str) {
  var count = 0;
  for (var pos = 1; pos <= str.length; pos++) {
  if (str.charAt(pos -1) == "B")
    count += 1
  else
    count
  } return count;
};

//countChar

function countChar(str, letter) {
  var count = 0;
  for (var pos = 1; pos <= str.length; pos++) {
  if (str.charAt(pos - 1) == letter)
    count += 1
  else
    count
  } return count;
};

// countChar v2

function countChar(str, char) {
  var count = 0;
  for (var pos = 1; pos <= str.length; pos++)
    if (str.charAt(pos - 1) == char)
      count += 1;
  return count;
};