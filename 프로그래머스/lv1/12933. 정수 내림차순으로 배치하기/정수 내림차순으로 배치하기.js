function solution(n) {
  let answer = parseInt(n.toString().split('').sort().reverse().join(''))
  return answer;
}
console.log(solution(118372)); // 873211