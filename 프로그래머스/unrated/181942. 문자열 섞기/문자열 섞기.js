function solution(str1, str2) {
    const [arr1, arr2] = [Array.from(str1), Array.from(str2)];
    const count = arr1.length;
    const answer = [];
    for (let i=0; i < count; i++) {
    	answer.push(arr1.shift(), arr2.shift());
    }
    return answer.join('');
}