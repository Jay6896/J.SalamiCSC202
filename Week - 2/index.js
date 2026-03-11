/*  NOTE, all other class functions must be called within other functions using this.
    To create a private variable, use the # . All the variables and functions in a class is public by default

*/

/* PERSONAL TEST OF CLASS STRUCTURE, NOT TAUGHT IN CLASS
********************************************************
class Person
{
    #name;
    #age;

    NameGetter(nameValue)
    {
        if (nameValue != null)
        {
            this.NameSetter(nameValue)
        }
    }

    NameSetter(name)
    {
        this.#name = name;
    }

    AgeGetter(ageValue)
    {
        if (ageValue === 20)
        {
            console.log("No diff");
            this.AgeSetter(ageValue)
        }
        else if (ageValue >= 20)
        {
            console.log("Above 20");
            this.AgeSetter(ageValue)
        }
        else if (ageValue < 20 && ageValue > 1)
        {
            console.log("less than 20");
            this.AgeSetter(ageValue)
        }
        else
        {
            console.log("Invalid age bro");
        }

    }

    AgeSetter(age)
    {
        this.#age = age;
    }

    Name()
    {
        console.log(this.#name);
    }

    Age()
    {
        console.log(this.#age);
    }

    constructor(nameValue,ageValue)
    {
        this.NameGetter(nameValue);
        this.AgeGetter(ageValue);
    }
}

let myDetails = new Person("John", 45);
myDetails.Name();
myDetails.Age();

********************************************************
*/

const myval = [10,20,30];

myval.pop(1);

for (let i = 0; i < myval.length; i++)
    {
        console.log(myval[i]);
    }

const person = ['J','A','D'];
let others = ['K','B','E'];

console.log(others);

// Replace others completely with a copy of person
// (creates a new array; others now equals person elements)
others = [...person];
console.log(others);

// OR: prepend person elements to others without replacing the variable
// (mutates others in place; returns new length)
others.unshift(...person);
console.log(others);

// OR: create a new merged array with person first, others after
let merged = [...person, ...others];
console.log(merged);

merged = [...person, ...others];
console.log(merged); // ['J','A','D','K','B','E']  (1D)

const nested = [person, others];
console.log(nested); // [['J','A','D'], ['K','B','E']]  (2D / nested)

const mixed = [person, ...others];
console.log(mixed); // [['J','A','D'], 'K', 'B', 'E']  (one nested element + flattened others)

// flatten one level:
console.log(nested.flat()); // ['J','A','D','K','B','E']

// correct spelling: splice
const a = ['a','b','c','d','e'];




// remove 3 elements starting at index 1 -> removes 'b','c','d'
const removed = a.splice(1, 3);
console.log(removed); // ['b','c','d']
console.log(a);       // ['a','e']

// remove 2 at index 1 and insert three values at that position
const b = ['a','b','c','d','e'];
b.splice(1, 2, 'X','Y','Z'); 
console.log(b); // ['a','X','Y','Z','d','e']

// deleteCount = 0 -> insert without deleting
const c = ['a','b','c'];
c.splice(1, 0, 'NEW');
console.log(c); // ['a','NEW','b','c']


// METHOD FUNCTIONS


// ARROW FUNCTIONS =>
// Normally, to check if a value is greater than something (or any logic in a function in general), we must declare a whole function for it

function greater(n)
{
    return n >= 4;
}
console.log(greater(12));


// But in newer versions of js (ES6+), there is no need for that, we use arrow functions for that

// Single param (no parentheses) - implicit return
const greater = n => n >= 4;
console.log(greater(12)); // true

// Multiple params - parentheses required, implicit return
const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5

// Block body - multiple statements, explicit return
const checkAndDescribe = (n) => {
    const isBig = n >= 4;
    const desc = isBig ? '>=4' : '<4';
    return { value: n, isBig, desc };
};
console.log(checkAndDescribe(12)); // { value: 12, isBig: true, desc: '>=4' }



// .filter()

const numbers = [1,2,3,4,5,6,7,8,9,10];


const favNum = numbers.filter(num => num == 4);
console.log(favNum); // [4]

// The equivalent of doing
favNum = numbers.filter(function(num) { return num == 4; });

// .map()

const increase = numbers.map(n => n + 5);
console.log(increase);
// increases all numbers by 5

console.log(numbers);

