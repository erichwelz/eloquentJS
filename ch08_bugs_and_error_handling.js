//Examples from the book

// function numberToString(n, base) {
//   var result = "", sign = "";
//   if (n < 0) {
//     sign = "-";
//     n = -n;
//   }
//   do {
//     result = String(n % base) + result;
//     console.log(n);
//     n = Math.floor(n / base);
//   } while (n > 0);
//   return sign + result;
// }
// console.log(numberToString(13, 2));

// function promptNumber(question) {
//   var result = Number(prompt(question, ""));
//   if (isNaN(result)) return null;
//   else return result;
// }

// console.log(promptNumber("How many trees do you see?"));

// function promptDirection(question) {
//   var result = prompt(question, "");
//   if (result.toLowerCase() == "left") return "L";
//   if (result.toLowerCase() == "right") return "R";
//   throw new Error("Invalid direction: " + result);
// }

// function look() {
//   if (promptDirection("Which way?") == "L")
//     return "a house";
//   else
//     return "two angry bears";
// }

// try {
//   console.log("You see", look());
// } catch (error) {
//   console.log("Something went wrong: " + error);
// }

//8.1 Retry

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

//Version 1: Will force recursive retry but does not check whether error is coming from reliable multiply

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch(error) {
    return reliableMultiply(a, b);
  }
}

//console.log(reliableMultiply(8, 8));
// → 64

//Version 2 - checks to make sure error instance of MultiplicatorUnitFailure()

// function reliableMultiply2(a, b) {
//   for(;;) { //creates a loop that won't break until valid exception
//     try {
//       return primitiveMultiply(a, b);
//     } catch(e) {
//       if (!(e instanceof MultiplicatorUnitFailure))
//         throw e;
//     }
//   }
// }

// console.log(reliableMultiply2(8, 8) );

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("locked");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  if(!box.locked)
    return body();

  box.unlock();
    try {
      return body();
    } finally {
      box.lock();
    }
  }

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true