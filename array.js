var friendAge=[17, 15, 20,8];
var goldenage= friendAge[0];
friendAge[1]=25;

var position= friendAge.indexOf(25);
console.log(position)
console.log(goldenage);
friendAge.push(31);
console.log(friendAge);
console.log(friendAge.length);
friendAge.pop();
console.log(friendAge);
friendAge.unshift(63);
console.log(friendAge);
friendAge.shift();
console.log(friendAge);
var sl = friendAge.slice(2,4);
console.log(sl);