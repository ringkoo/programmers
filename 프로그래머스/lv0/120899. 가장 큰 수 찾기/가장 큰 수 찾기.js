function solution(array) {
  var answer = [];
  let maxnum = Math.max(...array);
  let maxidx = array.indexOf(maxnum, 0);
  answer.push(maxnum);
  answer.push(maxidx);
  
  return answer;
}

