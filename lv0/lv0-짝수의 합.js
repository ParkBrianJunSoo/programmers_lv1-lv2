// n 이하의 짝수의 값 뽑기
// 


function solution(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) { // i = i + 2
        sum += i;
    }
    return sum;
}

console.log(solution(10))
console.log(solution(4))