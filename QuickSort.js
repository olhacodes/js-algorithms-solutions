//Quick Sort is a highly efficient sorting algorithm.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array is already sorted
    }

    let pivot = arr[Math.floor(arr.length / 2)]; // Choose a pivot element
    let left = []; // Elements less than the pivot
    let right = []; // Elements greater than the pivot

    // Partition the array into left and right subarrays
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue; // Skip the pivot element
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right subarrays and concatenate them with the pivot
    return quickSort(left).concat(pivot, quickSort(right));
}