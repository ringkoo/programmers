function solution(d, budget) {
    var answer = 0;
    let arr = d.sort((a, b) => a - b)
    let sum = 0
    let count = 0 // 이유는 ? 몇번 더했는지,
    for (let i = 0; i < d.length; i++) {
        // sum이 budget보다 작거나 같을때까지
        sum += d[i]
        if (budget >= sum) {
            count++
        }
    }
    // 각 요소를 더해주다가 budget 을 넘어가면 스탑
    return count;
}

console.log(solution([1, 3, 2, 5, 4])) // 3