function strParser(string){
    return Function(`"use strict"; return (${string})`)();
};
function solution(ineq, eq, n, m) {
    const answer = (eq === "!" ? +(strParser(`${n} ${ineq} ${m}`)) : +(strParser(`${n} ${ineq}${eq} ${m}`))); 
    return answer;
}