//  Count the occurrences of each character in a string
function charCount(str) {
    const count = {};
    // Iterate through characters and count occurrences
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}