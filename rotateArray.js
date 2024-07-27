//  Rotate an array k times to the right
function rotateArray(arr, k) {
    k = k % arr.length; // Handle cases where k is greater than array length
    // Slice the last k elements and concatenate them with the rest of the array
    return arr.slice(-k).concat(arr.slice(0, -k));
}
