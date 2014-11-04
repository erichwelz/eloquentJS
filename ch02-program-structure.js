//Looping a Triangle


var count = 1;
var string = '#'
while (count <= 7) {
  console.log(string);
  count  += 1;
  string += '#';
}

//Looping a Triangle

for (var line = "#"; line.length <= 7; line += "#")
  console.log(line);

//FizzBuzz

for (var num = 1; num <= 100; num++) {
  output = ''
  if (num % 15 == 0)
    output += "FizzBuzz";
  else if (num % 5 == 0)
    output += "Buzz";
  else if (num % 3 == 0)
    output = "Fizz"
  else
    output = num
  console.log(output);
};

//FizzBuzz

for (var num = 1; num <= 100; num++) {
  var output = '';
  if (num % 3 == 0)
    output += "Fizz";
  if (num % 5 == 0)
    output += "Buzz";
  console.log(output || num);
};