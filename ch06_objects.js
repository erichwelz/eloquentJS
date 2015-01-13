// Creating a vector type constructor

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(other){
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.minus = function(other){
  return new Vector(this.x - other.x, this.y - other.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});


console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

//Another Cell wrapping Textcell prototype defined in chapter

// Your code here.
function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);

StretchCell.prototype.minWidth = function(){
  return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function(){
  return Math.max(this.height,this.inner.minHeight());
};

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height)
};

console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]

//Sequence Interface

