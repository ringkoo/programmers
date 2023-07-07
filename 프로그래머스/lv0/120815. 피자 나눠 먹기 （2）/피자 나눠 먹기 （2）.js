//피자 한판 6조각
// 나눠먹을 사람 수 n
// 최소 몇판 시켜야 n명 다먹는지?

function solution(n) {
  const pizza = 6;
  for (let i = 1; i < 101; i++) {
    if ((pizza * i) % n === 0) {
      return i;
    }
  }
}
console.log(solution(10));
