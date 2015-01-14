var grades = [90,80,50,30];

console.log('Outside of a function:');


var sum = 0;

grades.forEach(function(i){
  sum += i;
});

console.log(sum/grades.length);

console.log('Anon function within an object');

var student1 = {
  grades: [90,80,50,30],

  printAverage: function() {
  var sum = 0;

  this.grades.forEach(function(i){
    sum += i;
  });

  return sum/this.grades.length;
  }
};

console.log(student1);
console.log(student1.printAverage() );

console.log('Applying method from one object to another');

var student2 = {
  grades: [88,77,66,55]
};

var another_array = {
  grades: [20,30,40,50]
};

console.log( student1.printAverage.apply(student2) );
console.log( student1.printAverage.apply(another_array) );

console.log('Object Prototyping');

function Student(grades) {
  this.grades = grades;
}

Student.prototype.printAverage = function(){
  var sum = 0;

  this.grades.forEach(function(grade){
    sum += grade;
  });

  return sum/this.grades.length;
};

var student1 = new Student([90,80,50,30]);
var student2 = new Student([88,77,66,55]);

console.log( student1 );
console.log( student2 );
console.log(student1.grades);
console.log(student1.printAverage() )

console.log('With Getters and Setters');
// will just print the array as now get or set created

var student1 = {
  grades: [90,80,50,30],

  get average() {
    sum = 0;
  this.grades.forEach(function(grade){
    sum += grade;
  });
  return sum/this.grades.length;
  },
  set average(value) {
    console.log("Ignoring attempt to set average to", value);
  }
};

console.log(student1.average);
student1.average = 40;

console.log('Adding average prototype to array');

Array.prototype.average = function() {
  var sum = 0;

  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum/this.length;
};

console.log(grades.average() );

console.log('Iterating over properties');

var student1 = {
  prop1: "Hello World",
  prop2: "World"
};

Object.prototype.ghostProp = "boo";

console.log('Iterating over all properties in Object');
for (var k in student1) {
  console.log(k);
}


console.log('Iterating over all properties that belong to object');
for (var k in student1) {
  if (student1.hasOwnProperty(k)) {
  console.log(k);
  }
}
