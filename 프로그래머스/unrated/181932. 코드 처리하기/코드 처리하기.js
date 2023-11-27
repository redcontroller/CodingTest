let mode = 0;
let ret = "";
function solution(code) {
    [...code].forEach((v, idx) => {
        if (v === '1') {
            mode = +(!mode);
        } else {
          if ((mode === 0) && (idx % 2 === 0) || (mode === 1) && (idx % 2 !== 0)) {
            ret += v;
          }
        }
    })
    
    return ret.length === 0 ? "EMPTY" : ret;
}