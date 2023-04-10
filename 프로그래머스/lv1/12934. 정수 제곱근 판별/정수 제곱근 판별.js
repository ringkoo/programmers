function solution(n) {
    let x = Math.sqrt(n) // 11
    let answer = 0
        if(parseInt(x)===x){
            return answer = Math.pow(x + 1, 2)    
        } else {
            return answer = -1
        }
    return answer; 
} 
console.log(solution(121)) // 144
console.log(solution(3)) // -1