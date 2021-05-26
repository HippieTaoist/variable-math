// Create four variables, `x1`, `y1`, `x2`, and `y2` and store numbers in each of them.
const x1 = 23;
const x2 = 32;
const y1 = 41;
const y2 = 14;
// Calculate the distance between coordinates (x1, y1) and (x2, y2). Log this distance out to the user in a human readable sentence.
const dist = Math.sqrt(Math.pow((x2 + x1), 2) + Math.pow((y2 - y1), 2));

console.log("So, when you take the distance between coordinantes (", x1, ", ", y1, ") and (", x2, " ,", y2, "), you're going to come to a distance of ", dist, ". ", dist, " whats... I just don't know. Let's just stick with units, I'll let you choose distance...");
console.log(dist, " Lightyears..");
console.log(dist, " Miles..");
console.log(dist, " Parsecs..");
console.log(dist, " Inches..");
console.log("What distance are you willing to go?")
    // The distance formula along with an example can be found below.

// <img src="https://cdn.tutors.com/assets/images/courses/math/geometry-help/tutors-how-to-use-the-distance-formula.jpg" width="400px"/>