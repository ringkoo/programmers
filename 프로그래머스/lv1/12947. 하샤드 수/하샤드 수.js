function solution(x) {
    var answer = true;
    let arr = String(x).split("").map((a)=> parseInt(a)).reduce((a, b) => a + b)
    console.log(arr)
    return x % arr === 0 ? true : false
}
console.log(solution(12))//true