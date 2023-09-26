function solution(s) {
    let countP = 0;
    let countY = 0;
    for (let i = 0; i < s.length; i++) { // [] => 배열 => 반복문은 string이거나 배열이거나 할 때만 가능
        if (s[i] === "p" || s[i] === "P") { // || or => 둘중에 하나만 true여도 true다. // && and => 둘다 true여야지 true다.
            // 반복문 => poopoyY
            // p o o p o y Y
            countP++;
            // countP = countP + 1;
        } else if (s[i] === "y" || s[i] === "Y") {
            countY++;
        }
    }
    // console.log("countP", countP) // 2
    // console.log("countY", countY) // 2

    if (countP === countY) {
        return true
    } else {
        return false
    }
};
// solution("poopoyY")
console.log(solution("pyY"));