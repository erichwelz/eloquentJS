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

//FizzBuzz var 2

for (var num = 1; num <= 100; num++) {
  var output = '';
  if (num % 3 == 0)
    output += "Fizz";
  if (num % 5 == 0)
    output += "Buzz";
  console.log(output || num);
};

//Chess Board

for (var row = 1; row <= 8; row++) {
  if (row % 2 == 0)
    console.log(' # # # #');
  else
    console.log('# # # # ');
};

//Chess Board var 2

var totalrows = 8
var board = ""
for (var row = 1; row <= totalrows; row++) {
  if (row % 2 == 0)
    board += (" # # # #\n");
  else
    board += ("# # # # \n");
};
console.log(board)

//Chess Board var 3

var grid = 8;
var board = "";

for (var row = 1; row <= grid; row++) {
  for(col = 1;col <= grid; col++){
  if ((row + col) % 2 == 0)
      board += '#';
    else
      board += ' ';
  }
  board += '\n';
}

console.log(board);

