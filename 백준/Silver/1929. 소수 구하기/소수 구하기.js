const [start, end] = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

for (let num = start; num <= end; num++) {
  if (isPrime(num)) console.log(num);
}
