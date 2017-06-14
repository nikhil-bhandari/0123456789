const seq = "abcdefghijklmnopqrstuvwxyz".split("");

function isPangram(str) {
    const lower = str.toLowerCase();

    return seq.every((char) => {
        return lower.indexOf(char) > -1;
    });
}

console.log(isPangram("We promptly judged antique ivory buckles for the next prize"));
console.log(isPangram("We promptly judged antique ivory buckles for the prize"));
console.log(isPangram("The quick brown fox jumps over the lazy dog"));