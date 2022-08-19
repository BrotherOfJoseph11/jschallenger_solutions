// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

//Solution 1

function myFunction(a) {
    if (a == Math.floor(a)) {
        return true;
    }

    else return false;
}

//Solution 2

function myFunction(a) {
    return a - Math.floor(a) === 0
}