//  Find the longest word in a string
function longestWord(str) {
    const words = str.split(' '); // Split string into words
    let maxLength = 0;
    let longest = '';
    // Iterate through words to find the longest one
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longest = word;
        }
    }
    return longest;
}
