function solution(my_string, n) {
    var answer = "";
    var word = my_string.length - n;
    
    for (let i = word; i < my_string.length; i++) {
        answer += my_string[i];
    }
    return answer;
}