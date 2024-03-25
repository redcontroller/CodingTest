function solution(l, r) {
    let answer = [];
    for (let i=l; i<=r; i++){
        let num = String(i);
        if(![...num].every((v) => v==='5' || v==='0')) continue;
        answer.push(i);
    }
    return answer.length ? answer:[-1];
}