// Check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = str.replace(/[\W_]/g, '').toLowerCase();
    // Check if cleaned string is equal to its reverse
    return cleaned === cleaned.split('').reverse().join('');
}