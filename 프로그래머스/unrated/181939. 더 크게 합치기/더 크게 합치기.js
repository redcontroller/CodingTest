function solution(a, b) {
    const sum1 = +(a.toString() + b.toString());
    const sum2 = +(b.toString() + a.toString());
    return sum1>sum2 ? sum1:sum2;
}