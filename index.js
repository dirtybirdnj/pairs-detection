console.log('Pairs Detection');
//console.log(process.argv);

let input = process.argv[2];
let rawValues = input.split(',');

if(!input || rawValues.length < 1){
    console.error('ERROR: No input provided, please pass a string of integers between 1 and 9 surrounded by single quotes');
    process.exit();
}

let integers = rawValues.map( value => {
    
    let integer = new Number(value);
    
    if(isNaN(integer) || integer > 9 || integer < 0){
        console.error('ERROR: Each segement of the string must be an integer 1-9. No decimals allowed.')
    }

    return integer
})

let pairs = [];

//Iterate over all of the values in the array
integers.forEach((int, index) => {
    
    integers.forEach((secondInt, secondIndex) => {

        if(index != secondIndex){
            //console.log(int, secondInt);
            //return [int, secondInt];
            pairs.push([int, secondInt])
        } 

    })

})

console.log(`Input: ${integers}`);
console.log(`Pairs: ${pairs.join(" | ")}`);

