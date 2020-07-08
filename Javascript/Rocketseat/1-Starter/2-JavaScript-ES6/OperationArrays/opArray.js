/* Operation in Arrays */

const array = [1, 3, 4, 5 ,8, 9];

/* Return new array */
const newArray = array.map(function(items, index){
    return items * index;
});

console.log(newArray);

/* Consume all array and return one value. */
const sum = array.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = array.filter(function(items) {
    return items % 2 === 0;
});

console.log(filter);

const find = array.find(function (items) {
    return items === 2;
})

console.log(find);