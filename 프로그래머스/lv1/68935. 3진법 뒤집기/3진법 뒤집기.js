function solution(n) {
    var arr = n.toString(3).split('').reverse()
    let arr2 = arr.join('')
    return parseInt(arr2, 3);

}

console.log(solution(45)) // 7 