function countAlteration(str) {
    const a = ["S", "O", "S"];
    let count = 0;

    for (let i = 0, current = 0; i < str.length; i++) {
        if (a[current] !== str[i]) {
            count++;
        }
        current = current === 2 ? 0 : current + 1;
    }
    return count;
}

console.log(countAlteration("SOSSPSSQSSOR"));
console.log(countAlteration("SOSSOT"));