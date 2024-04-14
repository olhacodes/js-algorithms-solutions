/* 
 * https://www.hackerrank.com/interview/preparation-kits/one-week-preparation-kit/one-week-day-two/challenges 
 Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.

* Sample output: 
* 100
* 63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33  
* Sample Output
* 0 2 0 2 0 0 1 0 1 2 1 0 1 1 0 0 2 0 1 0 1 2 1 1 1 3 0 2 0 0 2 0 3 3 1 0 0 0 0 2 2 1 1 1 2 0 2 0 1 0 1 0 0 1 0 0 2 1 0 1 1 1 0 1 0 1 0 2 1 3 2 0 0 2 1 2 1 0 2 2 1 2 1 2 1 1 2 2 0 3 2 1 1 0 1 1 1 0 2 2 
*
* Explanation:
* Each of the resulting values result[i] represents the number of times i appeared in arr.
*/

function countingSort(arr) {
    const count = new Array(100).fill(0);

    for(let i = 0; i < arr.length; i++) {
      /*
      arr[i] gets the ith element from the array arr.
      count[arr[i]] accesses the arr[i]th element of the count array.
      count[arr[i]]++ increments the arr[i]th element of the count array by 1.
      In the context of a counting sort, this line is counting the number of occurrences of each value in the input array. For each value in the input array, it increments the corresponding index in the count array.
      
      For example, if arr[i] is 5, then count[5] (the 5th element of the count array) will be incremented. This means that the number 5 has been found one more time in the input array.
      */
        count[arr[i]]++;
    }

    return count
}

