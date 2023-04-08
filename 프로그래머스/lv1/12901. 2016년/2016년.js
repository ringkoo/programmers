function solution(a, b) {
    // week라는 변수에 일요일부터 토요일까지의 요일을 넣어준다.
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
   
    // ``을 사용하게 되면 ${ } 사이에 변수나 연산 등을 삽입할 수 있게 된다.
    let date = new Date(`2016-${a}-${b}`);

	// getDay()함수는 날짜의 요일을 받아오는 함수로 일요일부터 토요일까지 0부터 6을 반환
    let day = date.getDay();
    
    // 최종 결과는 week의 [i]번째 인덱스를 리턴
    return week[day];
}