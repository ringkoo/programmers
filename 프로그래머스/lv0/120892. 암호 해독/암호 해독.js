function solution(cipher, code) {
    
    let arr = cipher.split('')
    let arr2 = []
    for(let i = code; i <= arr.length; i ++) {
        if (i % code === 0) {
            arr2.push(arr[i - 1])
        }
    } return arr2.join('')
}
console.log(solution("dfjardstddetckdaccccdegk", 4))