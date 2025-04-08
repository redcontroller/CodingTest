const input = process.platform === 'linux' ? require('fs').readFileSync('/dev/stdin', 'utf8').toString().trim() : '()(((()())(())()))(())';

const stack = [];
let count = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    // '('라면 stack에 push
    stack.push('(');
  } else if (input[i - 1] === '(') {
    // ')'이고 직전 문자가 '('이면 레어저
    stack.pop();
    count += stack.length;
  } else {
    // ')'이고 직전 문자가 ')'이면 어느 쇠막대의 끝
    stack.pop();
    count += 1;
  }
}

console.log(count); // 17