// export and import are used to reference files in other files
// Structuring and Destructuring

console.log(parseInt('23.99'))

// ---------- Structuring (building objects / arrays) ----------
const firstName = 'Alice';
const age = 25;
const city = 'Lagos';

// Put separate variables into ONE object  (structuring)
const person = {
  firstName,
  age,
  city,
};
console.log(person);

// Put values into ONE array (structuring)
const point = [10, 20];
console.log(point);

// ---------- Destructuring (pulling values back out) ----------
// Object destructuring
const { firstName: fn, age: personAge, city: homeCity } = person;
console.log(fn, personAge, homeCity);

// Array destructuring
const [xCoord, yCoord] = point;
console.log(xCoord, yCoord);

// Tenary operators
const values = [1,2,3,4,5]
const onlyTwo = values.map(num => num % 2 === 0 ? 'even' : num % 3 === 0 ? 'three' : num % 5 === 0 ? 'five': 'nothing')