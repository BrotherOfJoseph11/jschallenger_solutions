// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

// Resource: https://pawelgrzybek.com/rounding-and-truncating-numbers-in-javascript/

// Solution 1 using Math.round

function myFunction(a){
    return Math.round(a * 100) / 100;
}

// Solution 2 Using Number .toFixed()

function myFunction(a){
    return Number(a.toFixed(2));
}