const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄에서 지도의 크기 N을 추출
// 단항 덧셈 연산자(Unary Plus Operator)로 문자열을 숫자로 변환
const N = +input[0];
// N개의 줄을 2차원 숫자 배열로 변환 -> landMap이라는 변수에 저장
const landMap = input.slice(1).map((line) => line.split(' ').map(Number));

// 상하좌우 방향을 나타내는 배열 (dy: y축 이동, dx: x축 이동)
const dx = [0, 1, 0, -1]; // → ↓ ← ↑ (행 이동)
const dy = [-1, 0, 1, 0]; // → ↓ ← ↑ (열 이동)

// 방문 여부를 체크하는 2차원 배열 (전역으로 선언)
let visited;

/*
너비우선탐색(BFS)
- 현재 좌표 (x, y)에서 시작하여 연결된 안전 영역을 모두 방문 처리
- 비의 높이 h보다 높은 땅만 탐색
*/
const bfs = (x, y, h) => {
  const q = []; // 큐 생성
  visited[x][y] = true; // 시작 지점 방문 표시
  q.push([x, y]); // 시작 지점을 큐에 넣음

  while (q.length > 0) {
    const [x, y] = q.shift(); // 큐에서 하나 꺼냄

    // 상하좌우로 이동
    for (let i = 0; i < 4; i++) {
      const nextX = x + dx[i]; // 다음 x 위치
      const nextY = y + dy[i]; // 다음 y 위치
      // 다음 위치가 범위 안에 있고, 방문하지 않았으며, 물에 잠기지 않은 경우
      if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N && !visited[nextX][nextY] && landMap[nextX][nextY] > h) {
        visited[nextX][nextY] = true; // 방문 처리
        q.push([nextX, nextY]); // 큐에 다음 위치 추가
      }
    }
  }
};

/*
특정 비의 높이 (h)일 때 안전 영역의 개수를 구하는 함수
*/
const getCount = (h) => {
  // visited 배열을 false로 초기화 (N x N 크기)
  visited = Array.from({ length: N }, () => Array(N).fill(false));

  let count = 0; // 안전 영역 개수 초기화

  // 모든 좌표를 순회하며 탐색
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      // 방문하지 않았고, 현재 위치가 물에 잠기지 않았다면
      if (!visited[x][y] && landMap[x][y] > h) {
        bfs(x, y, h); // bfs로 연결된 영역 전체 방문 처리
        count++; // 안전 영역 개수 +1
      }
    }
  }

  return count; // 해당 높이에서의 안전 영역 개수 반환
};

// landMap 내에서 가장 높은 지형의 높이를 구함 (비의 최대 높이 설정용)
let maxHeight = 0;
for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    maxHeight = Math.max(maxHeight, landMap[x][y]);
  }
}

// 안전 영역 개수 중 최대값을 저장할 변수
let result = 0;

// 비의 높이를 0부터 maxHeight까지 증가시키며 모든 경우를 탐색
for (let h = 0; h <= maxHeight; h++) {
  result = Math.max(result, getCount(h)); // 안전 영역의 최대 개수 갱신
}

// 최종 결과 출력
console.log(result);
