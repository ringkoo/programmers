function solution(n) {
    let arr = []

    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                arr.push(i)
            }
        }
    } else {
        return 0
    }

    return arr.reduce((a, b) => a + b);
}