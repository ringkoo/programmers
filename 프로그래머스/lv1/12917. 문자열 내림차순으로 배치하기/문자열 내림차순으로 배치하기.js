function solution(s) {
    var answer = s.split("").sort().reverse()
    let upper = answer.filter((a,i) => a === answer[i].toUpperCase()).join('')
    let lower = answer.filter((a,i)=> a === answer[i].toLowerCase()).join('')

    return lower + upper
}
