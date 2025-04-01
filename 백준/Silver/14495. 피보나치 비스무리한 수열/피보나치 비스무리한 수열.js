const input = (process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin').toString() : `10`).trim();

const getFibonacci = (input) => {
  const idx = Number(input);
  const dp = [0, 1, 1, 1].map(BigInt);
  for (let i = 4; i <= idx; i++) {
    dp[i] = dp[i - 1] + dp[i - 3];
  }
  return dp[idx].toString();
};

console.log(getFibonacci(input));