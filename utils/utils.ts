export function isCloseEnough(word: string, knownWord: string) {
    // Calculate the Levenshtein distance between the two words
    const m = word.length;
    const n = knownWord.length;
    const dp = [];
    for (let i = 0; i <= m; i++) {
      dp[i] = [i];
    }
    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = Math.min(
          dp[i-1][j] + 1,
          dp[i][j-1] + 1,
          dp[i-1][j-1] + (word[i-1] !== knownWord[j-1] ? 1 : 0)
        );
      }
    }
    const distance = dp[m][n];
  
    // Check if the distance is less than or equal to 2 (arbitrary threshold)
    return distance <= 2;
}