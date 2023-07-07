function solution(order) {
  let count = 0;
  let result = order.toString();
  for (let i = 0; i < result.length; i++) {
    if (result[i] === '3' || result[i] === '6' || result[i] === '9') {
      count++;
      console.log(count);
    }
  }
  return count;
}

console.log(solution(29423));
