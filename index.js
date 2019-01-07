console.time('Total Execution Time:');
console.log('Pairs Detection');

let input = process.argv[2];
let rawValues = input.split(',');

if(!input || rawValues.length < 1){
    console.error('ERROR: No input provided, please pass a string of integers between 1 and 9 surrounded by single quotes');
    process.exit();
}

console.log(`Raw input ${rawValues}`)

let integers = rawValues.map( value => {
    
    let integer = new Number(value);
    
    if(isNaN(integer) || integer > 9 || integer < 0){
        console.error('ERROR: Each segement of the string must be an integer 1-9. No decimals allowed.')
        process.exit();
    }

    return integer
})

let pairs = [];

//Generate pairs arrays
integers.forEach((int, index) => {
    
    integers.forEach((secondInt, secondIndex) => {
        if(index != secondIndex){
            pairs.push([int, secondInt])
        } 
    })

})

let validPairs = pairs.reduce((pairs,pair) => {
    
    let sum = pair[0] + pair[1];
    if(sum === 10){ pairs.push(pair.toString()); }
    return pairs;

},[])

if(validPairs.length < 1){
    console.log('No valid pairs present in input');
    process.exit();
}

console.log(`Valid Pairs: ${validPairs.join(" | ")}`);

var uniquePairs = Array.from(new Set(validPairs));

console.log(`Unique Pairs: ${uniquePairs.join(" | ")}`);

//Combo Pair Detection
let noCombos = uniquePairs.reduce((combos, pair) => {

    let reversePair = pair.split("").reverse().join("");

    if(combos.indexOf(pair) === -1 && combos.indexOf(reversePair) === -1){
        combos.push(pair);
    }

    return combos;

},[]);

console.log(`Unique Pairs No Reverse: ${noCombos.join(" | ")}`);
console.timeEnd('Total Execution Time:');



