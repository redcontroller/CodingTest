function solution(arr, queries) {
    let answer = [...arr];
    for (let [s, e, k] of queries) {
    	answer = answer.map((v,i) => {
            if (s<=i && i<=e) {
            	return (i%k===0 ? v+1 : v)
            } else {
                return v
            }
        });    
    }
    return answer;
}