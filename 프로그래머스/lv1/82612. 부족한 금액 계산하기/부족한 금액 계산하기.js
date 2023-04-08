function solution(price, money, count) {
	let answer = 0;
    let playing = 0;

    for(let i = 0; i < count; i++){
        playing += price + price * i
    }
	
    if (money - playing < 0) {
        answer = (money - playing) * -1
    } else {
        answer = 0
    }
    return answer
}

console.log(solution(3, 20, 4)) // 10