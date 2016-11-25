
// // -------------------------------- //
// var names = ['Miguel', 'Mike', 'Obie', 'Dex'];
//
// names.forEach(function(name) {
//     console.log('forEach: ', name);
// });
//
// // ---------------- //
// names.forEach((name) => {
//   console.log('arrowFunc: ', name);
// });
//
// // ---------------- //
// names.forEach((name) => console.log('oneLine: ', name));


// // -------------------------------- //
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Miguel'));
//
// // ---------------- //
//
// // anonymous functions have their own 'this' binding
// // arrow functions inherit their parent's 'this' binding
// var person = {
//   name: 'Miguel',
//   greet: function() {
//     names.forEach(function(name) {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();
// // returns undefined for person
//
// var person = {
//   name: 'Miguel',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();
//

// challenge:

function add(a,b) {
  return a + b;
}

// addStatement
var addStatement = ((a,b) => {
  return a + b;
});

// addExpression
var addExpression = ((a,b) => a + b);



console.log(add(1,3));
console.log(add(9,0));
// ---------------- //
console.log('addStatement');
console.log(addStatement(1,3));
console.log(addStatement(9,0));
// ---------------- //
console.log('addExpression');
console.log(addExpression(1,3));
console.log(addExpression(9,0));
