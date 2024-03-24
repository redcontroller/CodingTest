function solution(numLog) {
	const i = numLog.length;
    let control = "";
    let key = "";
    for(let j=0; j < i; j++) {
        if (numLog[j] < numLog[j+1]) {
           key = numLog[j+1] - numLog[j] === 1 ? "w" : "d";
           control = control + key;
        } else if (numLog[j] > numLog[j+1]) {
           key = numLog[j] - numLog[j+1] === 1 ? "s" : "a";
           control = control + key;
        }
    }
    return control;
}