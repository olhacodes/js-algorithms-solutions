// Check if an array is sorted
function isSorted(arr) {
    // Compare each element with the previous one to check if sorted
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}
