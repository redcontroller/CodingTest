function solution(a, b, c) {
	if (a === b && a === c && b === c) {
        return (a+b+c)*(a*a+b*b+c*c)*(a**3+b**3+c**3);
    }
    else if (a === b || a === c || b === c) {
        return (a+b+c)*(a*a+b*b+c*c);
    }
    else {
        return a+b+c
    }
}