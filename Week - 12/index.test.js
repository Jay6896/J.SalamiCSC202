const rand = require('./index')
const greaterOrEqual = require('./index')
const lessOrEqual = require('./index')

let rand_range = 100

test(`generateRandomNumber should return a number between 1 and ${rand_range}`,() =>
{
    const randomNumber = rand()
    expect(greaterOrEqual(1, randomNumber))
    expect(lessOrEqual(100, randomNumber))
}
);