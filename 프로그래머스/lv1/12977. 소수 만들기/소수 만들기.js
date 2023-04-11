function solution(nums) {
    var answer = 0;
    let sum = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if(isPrime(nums[i] + nums[j] + nums[k])){
                    answer++;
                }
            }
        }
    }
    return  answer;
}
const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}