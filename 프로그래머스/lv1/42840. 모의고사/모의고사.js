function solution(answers) {
    let answer = []
    let arr1 = [1, 2, 3, 4, 5] // 5
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5] // 8
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 10
    let rt1 = answers.filter((a, i) => arr1[i % arr1.length] === a).length
    let rt2 = answers.filter((a, i) => arr2[i % arr2.length] === a).length
    let rt3 = answers.filter((a, i) => arr3[i % arr3.length] === a).length

    var max = Math.max(rt1, rt2, rt3)

    if(max === rt1) answer.push(1)
    if(max === rt2) answer.push(2)
    if(max === rt3) answer.push(3)

    return answer;
}

