//Works with raw integers
//var items = [4,5,4,6,3,4,5,2,23,1,4,4,4]

//Does not work with arrays of arrays, boo!
var items = [[1,1],[1,2], [1,1]];
var uniqueItems = Array.from(new Set(items))

console.log(uniqueItems);