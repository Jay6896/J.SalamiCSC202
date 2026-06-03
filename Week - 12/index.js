function rand(a = Date.now(),rand_limit)
{
    rand_limit = 100
    rand_val = a % rand_limit
    console.log(rand_val)
}

function greaterOrEqual(a=0,rand_val=0)
{
    if (rand_val >= 0)
    {
        console.log(`Value is greater than or equal to ${a}`)  
    }
}

function lessOrEqual(a=0,rand_val=0)
{
    if (rand_val <= 0)
    {
        console.log(`Value is less than or equal to ${a}`)  
    }
}

rand()

module.exports = rand
module.exports = greaterOrEqual
module.exports = lessOrEqual
// console.log(Date.now()% 100)