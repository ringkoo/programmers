function solution(arr) {
    var answer = [];
    let min = Math.min(...arr)
    console.log(min)
    answer = arr.filter((a) => a !== min)
    console.log(answer)

    if (answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}

console.log(solution([4, 3, 2, 1]))