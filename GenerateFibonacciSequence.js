//  Generate Fibonacci sequence up to n
function fibonacci(n) {
    const fib = [0, 1]; // Start with the first two Fibonacci numbers
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]); // Add the next Fibonacci number
    }
    return fib;
}