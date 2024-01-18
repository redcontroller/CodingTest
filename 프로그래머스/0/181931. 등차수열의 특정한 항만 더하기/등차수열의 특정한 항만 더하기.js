function solution(a, d, included) {
    const answer = included
    				.map((curr, idx) => curr ? idx*d + a : 0)
    				.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return answer;
}