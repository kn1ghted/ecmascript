// Flat
let array = [1,2,3,[1,1,1],[2,2,2]];
console.log(array.flat(2));
console.table(array.flat(2));

const array2 = [1,2,[3,4],5,6];
const result = array2.flat();

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat();

const array3 = [1, 2, [3, 4, [5, 6]]];
const result3 = array3.flat(2);

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const result4 = array4.flat(Infinity);

// Flat map
let array5 = [1,2,3,4,5];
console.log(array5.flatMap(v => [v, v*3]));
console.table(array5.flatMap(v => [v, v*2]));