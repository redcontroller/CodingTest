function solution(n, control) {
    const w = control.match(/w/g) ? control.match(/w/g).length : 0; 
    const s = control.match(/s/g) ? control.match(/s/g).length : 0;
    const d = control.match(/d/g) ? control.match(/d/g).length * 10 : 0;
    const a = control.match(/a/g) ? control.match(/a/g).length * 10 : 0;
    const result = n + w - s + d - a;
    return result;
}