function isFunny(str) {
    const rStr = str.split("").reverse().join("");
    const alpha = "a".charCodeAt(0) - 1;
    for (let i = 1; i < str.length; i++) {
        let a = str.charCodeAt(i - 1) - alpha;
        let b = str.charCodeAt(i) - alpha;
        let c = rStr.charCodeAt(i) - alpha;
        let d = rStr.charCodeAt(i - 1) - alpha;
        if (Math.abs(b - a) !== Math.abs(d - c)) {
            return false;
        }
    }

    return true;
}

console.log(isFunny("acxz"));