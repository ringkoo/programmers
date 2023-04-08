

//민우가 구매한 로또 번호를 담은 배열 lottos, 
//당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 
//이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.


function solution(lottos, win_nums) {
    var answer = [];
    let min = lottos.filter((a) => win_nums.includes(a)).length // [ 1, 31 ]
    let count = lottos.filter((a) => a == 0).length
    let max = min + count
    let rank = [];
    switch (max) {
        case 2:
            rank.push(5)
            break;
        case 3:
            rank.push(4)
            break;
        case 4:
            rank.push(3)
            break;
        case 5:
            rank.push(2)
            break;
        case 6:
            rank.push(1)
            break;
        default:
            rank.push(6)
    }

    switch (min) {
        case 2:
            rank.push(5)
            break;
        case 3:
            rank.push(4)
            break;
        case 4:
            rank.push(3)
            break;
        case 5:
            rank.push(2)
            break;
        case 6:
            rank.push(1)
            break;
        default:
            rank.push(6)
    }

    return rank;
}

console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])) //[1, 6]