// Find the factorial of a number
function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) return 1;
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}