function solution(arr, queries) {
    queries.forEach((querie) => {
        [arr[querie[0]], arr[querie[1]]] = [arr[querie[1]], arr[querie[0]]];
    })
    return arr;
}