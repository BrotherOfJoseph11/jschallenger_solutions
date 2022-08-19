// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

//Solution 1 
function myFunction(a, b, c, d, e, f){
    let sum = a + b;
    let subtract = sum - c;
    let multiply = subtract * d;
    let divide = multiply / e;
    return divide ** f;
}

// solution 2

function myFunction(a, b, c, d, e, f){
    return (((a + b - c) * d) / e) ** f;
}