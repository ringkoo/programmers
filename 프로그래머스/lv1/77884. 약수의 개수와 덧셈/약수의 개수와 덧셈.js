function solution(left, right) {
	let count = 0;
	for (let i = left; i <= right; i++) {
        let yaksu = 0;
		for (let j = 1; j <= i; j++) {
			if (i % j === 0) {
				yaksu += 1
			}
		} 
		if (yaksu % 2 === 0) {
			count += i
		} else {
			count -= i
		}
	}
	return count;
}

console.log(solution(13, 17)) // 43