//  Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;
    // Merge arrays by comparing elements and pushing the smaller one
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    // Concatenate remaining elements of arr1 or arr2
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}