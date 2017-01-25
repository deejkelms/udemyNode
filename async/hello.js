// setTimeout(function () {
//   console.log('1');
// }, 2000);
//
// setTimeout( function(){
//   console.log('2');
// }, 1000);
//
// setTimeout( function(){
//   console.log('3');
// }, 3000);

console.log('Challenge:')

function printInTwoSec(message) {
  setTimeout(function (){
    console.log(message);
  }, 2000);
}
printInTwoSec("IM THE BEST");
