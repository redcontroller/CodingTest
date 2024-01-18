function solution(a, d, included) {
    return included.reduce((accumulator, currentValue, index) => currentValue ? a + d*index + accumulator : accumulator, 0);
}