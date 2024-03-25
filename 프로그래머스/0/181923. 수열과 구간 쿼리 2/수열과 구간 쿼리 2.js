function solution(arr, queries) {
    let arrCopy = [...arr];
    let answer = [];
    for (let [s, e, k] of queries) {
        let response = arrCopy.filter((v, i) => (i>=s&&i<=e&&v>k)).sort((a,b) => a-b)[0];
        answer.push(response?response:-1);
        //if (response) {
        //    arrCopy = arrCopy.filter((v) => v !== response);
        //}
    }
    return answer;
}