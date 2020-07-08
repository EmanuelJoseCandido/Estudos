"use strict";

/* Operation in Arrays */
var array = [1, 3, 4, 5, 8, 9];
/* Return new array */

var newArray = array.map(function (items, index) {
  return items * index;
});
console.log(newArray);
/* Consume all array and return one value. */

var sum = array.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = array.filter(function (items) {
  return items % 2 === 0;
});
console.log(filter);
var find = array.find(function (items) {
  return items === 2;
});
console.log(find);
