// 길이가 같은 두 문자열 str1과 str2가 주어집니다.

// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 
// 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

function solution(str1, str2) {
    let result = []
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    let long = str1.length + str2.length
    for (let i = 0; i < long; i++) {
        result.push(arr1[i])
        result.push(arr2[i])
    }
    console.log(result)

    return result.join('')
}
console.log(solution("aaaaa", "bbbbb"))