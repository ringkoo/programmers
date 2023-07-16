function solution(num, k) {
    var numStr = num.toString(); // 정수 num을 문자열로 변환
    var answer = -1; // 기본적으로 k가 없을 경우 -1을 반환
    
    for (var i = 0; i < numStr.length; i++) {
        if (parseInt(numStr[i]) === k) { // 현재 자리 숫자와 k를 비교
            answer = i+1; // k가 있는 자리 수를 저장
            break; // 한 번 발견했으면 더 이상 확인할 필요가 없으므로 반복 종료
        }
    }
    
    return answer;
}