// An object is simply a KeyValue Pair
// A key in an object can be anything in javascript, even reserved words
// to call an object that exists within an object. use this

// NOTE: If you are using sentences or reserved words as keys, must be in quotation marks
const parent = 
{
    name: 'John',
    age: 30,
    'state of origin': 'lagos',
}

console.log(parent.name)

// You can also return functions as Values

const person = 
{
    name: 'John',
    age: 30,
    'state of origin': 'lagos',
    return()
    {
        return `My name is ${this.name}. I am from ${this["state of origin"]}. I was born in ${new Date().getFullYear() - this.age}`
    }, 
    0: 'zero'
}

console.log(person.return())