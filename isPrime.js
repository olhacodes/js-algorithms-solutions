//  Check if a number is prime
function isPrime(num) {
    // Check for numbers less than 2
    if (num <= 1) return false;
    // Check for factors up to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}