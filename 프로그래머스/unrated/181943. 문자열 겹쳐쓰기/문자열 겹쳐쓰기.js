function solution(my_string, overwrite_string, s) {
    const end = overwrite_string.length;
    const answer = my_string.split('');
    answer.splice(s, end, overwrite_string);
    return answer.join('');
}