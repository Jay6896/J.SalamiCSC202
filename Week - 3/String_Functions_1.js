// Strings arent mutable

// Backticks respect spaces
const song = `twinkle
twinkle
        little star`

const rhyme = "twinkle \ntwinkle \n\tlittle star"

console.log(song)
console.log(rhyme)

// To put quotations inside a string, you use \"My Quote\" if double quote and "My Quote" if single quote

const quote = "I am \"here\""
const quote2 = 'I am "here"'

// To perform pythons string literal which is known as template literal in js or string interpolation, we do
const firstName = 'Jamil'
const lastName = 'Salami'

const fullName = `My name is ${firstName} ${lastName}`
console.log(fullName)

// NOTE: expressions can be written inside the {} e.g {new Date().getFullYear() - age}

// String operations/methods: .toUpperCase(), .toLowerCase(), replace(), indexOf,...
// They are camelCased and dont take any params
// NOTE .length is NOT a method

console.log(firstName.length) // Not the same as console.log(firstName)

// .indexOf - gives the index of the first letter of the value being looked for. If not found or indexOf is used without a string inside, it would return -1.
/* #**********************************************************************************# */

console.log(firstName.indexOf("mil")) // would give 2

// .indexOf also has an optional paramter after the first one which is used to give a range so it looks for the first appearance of what is being searched for FROM the index range you specified
console.log(lastName.indexOf("a", 2)) // would give 3

// .lastIndexOf() - returns the last index of the value, if a value occurs once, the indexOf and lastIndexOf would be the same
/* #**********************************************************************************# */

console.log(lastName.lastIndexOf('a'))

// .replace() - replaces a value, first param is the value to be replaced, second param is what you want to replace it with
let name3 = "Jerry"
console.log(name3.replace("J","T"))



// REGULAR EXPRESSIONS OR regex
/* NOTES: + means 1 or more digits


*/
console.log(fullName.match(/\d+/g))
console.log(fullName.match(/\d+/, '****'))
console.log(fullName.match(/\s+/g))
console.log(fullName.match(/\S+/g))
console.log(fullName.match(/JJamil | SAlami/gi))

