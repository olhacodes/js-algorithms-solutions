/**
Complete the 'findMedian' function below.
The function is expected to return an INTEGER.
The function accepts INTEGER_ARRAY arr as a parameter.
The sorted arr=[0,1,2,3,4,5,6]. Its middle element is at arr[3] = 3
*/

function findMedian(arr) {
    arr.sort((a, b) => a - b);
    return arr[Math.floor(arr.length / 2)];
}
