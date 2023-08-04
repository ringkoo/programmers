function solution(before, after) {
    var answer = 0;
    if (before.split('').sort().join('') === after.split('').sort().join('')) {
        return 1;
    } else {
        return 0;
    }
}
