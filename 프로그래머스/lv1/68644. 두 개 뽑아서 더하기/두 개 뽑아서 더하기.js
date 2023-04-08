function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
                answer.push(numbers[i]+numbers[j])
        }
    }
    answer = [...new Set(answer)].sort((a, b) => a - b)
    return answer;
}
console.log(solution([2, 1, 3, 4, 1])) // [2,3,4,5,6,7]