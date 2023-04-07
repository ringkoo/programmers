function solution(s) {
    let arr = s.split('').length // 5
    if(arr % 2 === 0) {
        let a = arr / 2;
        return s[a - 1] + s[a] 
    } else {
        let b = Math.floor(arr / 2);
        return s[b]
    }
}
console.log(solution("abcde")) // c