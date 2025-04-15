const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const wine = input.slice(1).map(Number);
const dp = Array(n).fill(0);

dp[0] = wine[0];
if(n >= 2) dp[1] = wine[0] + wine[1];
if(n >= 3) dp[2] = Math.max(wine[0] + wine[1], wine[0] + wine[2], wine[1] + wine[2]);

for (let i = 3; i < n; i++) {
	dp[i] = Math.max(
		dp[i - 1],
		dp[i - 2] + wine[i],
		dp[i - 3] + wine[i - 1] + wine[i]
	);
}

console.log(dp[n -1]);