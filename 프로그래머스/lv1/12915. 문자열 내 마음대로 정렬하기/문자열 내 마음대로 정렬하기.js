function solution(strings, n) {
    let arr = strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1
        } else if ( a[n] < b[n]) {
            return -1
        } else {
            if(a > b) {
                return 1
            } else {
                return -1
            }
        }
    })
    return arr
}
console.log(solution(["sun", "bed", "car"], 1)) // ["car", "bed", "sun"]
