function solution(s) {
    let str = s.toUpperCase()
    let arr = str.split('')
    console.log(arr)
    let p = arr.filter(element => 'P' === element).length;
    let y = arr.filter(element => 'Y' === element).length;

    if (p === y) {
        return true
    } else {
        return false
    }
}
console.log(solution("pPoooyY")) // true