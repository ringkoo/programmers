function solution(a, b) {
    var answer = 0;
    let am = a.toString()
    let bm = b.toString()
    sum1 = am + bm
    sum2 = bm + am
    if(sum1 - sum2 > 0){
        return parseInt(sum1)
    } else {
        return parseInt(sum2)
    }
}