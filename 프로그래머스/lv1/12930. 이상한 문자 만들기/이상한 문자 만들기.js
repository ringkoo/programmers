function solution(s) {
    let answer2 = []
    let arr = s.split(' ')  //[ 'try', 'hello', 'world' ]
    for (let i = 0; i < arr.length; i++) {
        var answer = []
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 === 0) { // 대소문자로 나오는구간
                answer += (arr[i][j].toUpperCase())
            } else {
                answer += (arr[i][j].toLowerCase())
            }
        } console.log(answer)
        answer2.push(answer)
    }
    return answer2.join(' ')
}

console.log(solution("try hello world")) // "TrY HeLlO WoRlD"