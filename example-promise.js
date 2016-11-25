// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Miami', function(err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
//
// });
//
//
// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//       setTimeout(function() {
//         resolve(79);
//         reject('City not found');
//       }, 1000)
//     });
// }
//
// getTempPromise('Miami').then(function(temp) {
//   console.log('promise success', temp);
// },function(err) {
//   console.log('promise error', err);
// });


// Promise Challenge

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    reject('both arguments must be integers!');
  });
}

addPromise(2,5).then(function(sum) {
  console.log('The sum of both numbers is', sum + '!');
}, function(err) {
  console.log('Error,', err);
});
