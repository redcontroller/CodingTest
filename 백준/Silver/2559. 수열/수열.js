const input =
  process.platform === 'linux'
    ? require('fs')
        .readFileSync('/dev/stdin', 'utf8')
        .toString()
        .trim()
        .split('\n')
        .map((e) => e.split(' ').map(Number))
    : [
        [10, 2],
        [3, -2, -4, -9, 0, 3, 7, 13, 8, -3],
      ];
const [N, K] = input[0];
const seq = input[1];

const sums = [];
for (let i = 0; i < N - K + 1; i++) {
  let tmp = 0;
  for (let j = 0; j < K; j++) {
    tmp += seq[i + j];
  }
  sums.push(tmp);
}
console.log(Math.max(...sums));