const arr = [1,2,3,4,5]
/*const add = a => a + 10
console.log(add(2))

const increase = arr.map(n => n + 100)


// .reduce() array function, it sums every element in array, if you set a number at the end it would be the initial value and that number would be used to add through first then the others
/* #**********************************************************************************# */

// const arr = [1,2,3,4,5] - Reminder
const sum = arr.reduce((a, b) => a + b); // starts at 1, result = 15
console.log(sum);

// MUST PUT initialValue when doing multiplication because the initial value without it is 0

const sum2 = arr.reduce((n,m) => n + m, -5)
console.log(sum2) // arr = [1,2,3,4,5], initialValue = -5, so steps: -5 + 1 = -4  →  -4 + 2 = -2  →  -2 + 3 = 1  →  1 + 4 = 5  →  5 + 5 = 10

const product = arr.reduce((n,m) => n * m, 2)
console.log(product) // rr = [1,2,3,4,5], initialValue = 2, so steps 2 * 1 = 2  →  2 * 2 = 4  →  4 * 3 = 12  → 12 * 4 = 48  →  48 * 5 = 240

// .replace
/* #**********************************************************************************# */
// const names = ['John', 'David', 'Kevin']
// const getUpperCase = names.map(name => name.replace(name[0], name[0].getUpperCase()))


// .reverse() array function, simply reverses the elements in a function
/* #**********************************************************************************# */

const rev = [2,4,6,8,10]
rev.reverse()
console.log(rev)

// .sort() it converts the elements to strings then sorts alphabetically
/* #**********************************************************************************# */
const sortarr = [4000,1,50000,300,20]
sortarr.sort()
console.log(sortarr)

// This is used to sort from highest to lowest ALWAYS
// a is the first element, b is b + 1 so a is like index 0 and b is like index 1
/* #**********************************************************************************# */

sortarr.sort((a,b) => b - a)
console.log(sortarr)

// This is used to sort from highest to lowest ALWAYS
/* #**********************************************************************************# */

sortarr.sort((a,b) => a - b)
console.log(sortarr)

// .slice()
/* #**********************************************************************************# */

const names = ['John', 'Kevin', 'David']

const copy = names.slice();
console.log(copy);           // ['John','Kevin','David']
console.log(copy === names); // false (different array reference)

// slice from index 1 to 3 (3 exclusive) -> indices 1 and 2
console.log(names.slice(1, 3)); // ['Kevin','David']

// slice with negative start -> last 2 elements
console.log(names.slice(-2)); // ['Kevin','David']

// slice does not mutate
console.log(names); // ['John','Kevin','David']

