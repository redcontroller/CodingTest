function solution(n) {
    let answer = 0;
    answer = Array(n+1).fill(0)
            .map((_, idx) => n % 2 === 0 
                 ? (idx % 2 === 0 ? idx : 0)
                 : (idx % 2 !== 0 ? idx : 0)
            )
            .reduce((acc, cur) => n % 2 === 0
                    ? (cur ** 2) + acc
                    : cur + acc
                    , 0);
    return answer;
}