// When you assign an array to another array, they reference each other
// if you compare them, it would return true

const names = ['John', 'Kevin', 'David']

const stream1 = names

console.log(stream1 == names)

console.log(names)
console.log(stream1)

names.shift()

console.log(names)
console.log(stream1)

// to avoid this, we can use .slice() or the spread operator ...
const names2 = ['John', 'Kevin', 'David']

// .slice()
stream1 = names2.slice()

// spread operator
stream1 = [...names2]

