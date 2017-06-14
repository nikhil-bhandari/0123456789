const seq = "hackerrank".split("");

function checkHackyString(str) {
    let current = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === seq[current]) {
            current++;
        }
    }

    return current === seq.length ? "YES" : "NO";

}

console.log(checkHackyString("hackerrank"))
console.log(checkHackyString("hackerrak"))
console.log(checkHackyString("haacckkerannk"))
console.log(checkHackyString("haacckkerrannkk"))
console.log(checkHackyString("hereiamstackerrank"))
console.log(checkHackyString("hackerworld"))