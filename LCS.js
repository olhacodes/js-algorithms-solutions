// Computes the length of the Longest Common Subsequence (LCS) between two strings.

function longestCommonSubsequence(text1, text2) {
    // Get lengths of the two input strings
    const m = text1.length;
    const n = text2.length;
    
    // Create a 2D array to store the lengths of LCS
    // dp[i][j] represents the length of LCS of text1[0..i-1] and text2[0..j-1]
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    // Fill the dp array using a bottom-up approach
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Check if the current characters from both strings match
            if (text1[i - 1] === text2[j - 1]) {
                // Characters match, so extend the LCS length by 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // Characters don't match, take the maximum length from the previous state
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // The length of the LCS for the full strings is stored in dp[m][n]
    return dp[m][n];
}

// Example usage
const text1 = "ABCBDAB";
const text2 = "BDCAB";
console.log(longestCommonSubsequence(text1, text2)); // Output: 4