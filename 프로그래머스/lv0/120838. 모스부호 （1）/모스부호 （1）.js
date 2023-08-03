function solution(letter) {
    // 모스 부호를 해독하는 함수
    function decodeMorse(morseCode) {
        // 모스 부호와 영어 소문자 대응을 담은 객체
        const morse = { 
            '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
            '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
            '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
            '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
            '-.--': 'y', '--..': 'z'
        };

        // 모스 부호를 공백으로 나누어 단어들의 배열로 변환
        const words = morseCode.split(' ');

        let decodedString = '';
        // 각 단어를 해독하여 decodedString에 추가
        words.forEach(word => {
            // 모스 부호와 영어 소문자 대응이 있는 경우 해당하는 영어 소문자로 변환
            if (morse[word]) {
                decodedString += morse[word];
            } else {
                // 해당하는 모스 부호가 없는 경우는 공백으로 처리
                decodedString += ' ';
            }
        });
        return decodedString;
    }

    // 주어진 모스 부호 letter를 해독하여 영어 소문자로 변환하여 반환
    return decodeMorse(letter);
}