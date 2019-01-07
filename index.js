console.log('Pairs Detection');
//console.log(process.argv);

let input = process.argv[2];

if(!input){
    console.error('No input provided, please pass a string of integers between 1 and 9 surrounded by single quotes');
    process.exit();
}

console.log(`Input: ${input}`);