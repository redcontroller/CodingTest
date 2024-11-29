function solution(n, arr1, arr2) {
    const map1 = arr1.map(e => e.toString(2).padStart(n, '0').replaceAll('1', '#').replaceAll('0', ' '));
    const map2 = arr2.map(e => e.toString(2).padStart(n, '0').replaceAll('1', '#').replaceAll('0', ' '));
    const answer = [];
    for (let i=0; i<n; i++) {
        const map1Arr = map1[i].split('');
        const map2Arr = map2[i].split('');
        const merge = map1Arr.map((e, idx) => {
            if (e === '#' || map2Arr[idx] === '#') {
                return '#';
            } else {
                return ' ';
            }
        }).join('');
        answer.push(merge);
    }
    return answer;
}