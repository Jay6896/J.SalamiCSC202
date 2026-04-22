let x = 10;
let y = x++;
let z = ++y;
let w = z--;

let ex = '2000'
console.log(`x - ${x}, y - ${y}, z - ${z}, w - ${w}`)


// Assignment operators




// typeof
// to convert to numbers, you must multiply or add by things that leave it as the same number as it was as a string
console.log(ex)
console.log(typeof(ex))
console.log(typeof(ex - 0))

// parseFloat() converts to a float, regardless of string or int
console.log(parseFloat('23.99'))
// parseInt() completely trunctates, no rounding
console.log(parseInt('23.99'))

