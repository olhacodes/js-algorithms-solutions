//  Find the nth largest element in an array
function nthLargest(arr, n) {
    // Sort the array in descending order
    const sorted = [...arr].sort((a, b) => b - a);
    // Return the nth largest element (1-based index)
    return sorted[n - 1];
}