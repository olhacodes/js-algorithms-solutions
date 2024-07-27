//  Find the sum of an array
function arraySum(arr) {
    // Use reduce to accumulate the sum of array elements
    return arr.reduce((sum, num) => sum + num, 0);
}