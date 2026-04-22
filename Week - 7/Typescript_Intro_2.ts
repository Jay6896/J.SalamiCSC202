// Creating arrays

let arr:number[] = [1,2,3,4,5]

// Creating tuples

// let tup:

// Creating functions
function Greet(name:string = "there"):string 
{
    let sentence:string = `Hello ${name}`;
    return sentence
}

// Creating arrow functions
let greet = (name:string = `there`):string => 
{
    let sentenceTwo:string = `Hello ${name}`;
    return sentenceTwo
}

// Union datatypes, can be either a string or a number
let userValue:string | number = "John"

// Type Aliases (Must be Pascalcased)
