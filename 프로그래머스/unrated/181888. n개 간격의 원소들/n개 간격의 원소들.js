function solution(num_list, n) {
  // num_list 의 0번째 인덱스(1번만)와 n번째 인덱스를 배열에 push
  let answer = [];
  for (let i=0; i < num_list.length /n; i++) {
    answer.push(num_list[n*i]);
  }
  console.log(answer)
  return answer;
}

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4,6,7]
// console.log([4, 2, 6, 1, 7, 6], 4); //	[4, 7]
