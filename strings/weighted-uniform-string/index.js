const seq = "abcdefghijklmnopqrstuvwxyz".split("");
const uniformSet = {};

function sum(arr) {
    return (seq.indexOf(arr[0]) + 1) * arr.length;
}

function generateSet(str) {
     str
        .split("")
        .reduce(function (acc, char, index) {
            if(str[index-1] !== char){
                acc[char] = 0;
            }
            acc[char]++;
            uniformSet[(seq.indexOf(char) + 1) * acc[char]] = true;
            return acc;
        }, {})
}
function isUniform(num) {
    return uniformSet[num]
}