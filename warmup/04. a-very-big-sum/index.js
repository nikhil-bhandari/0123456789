function aVeryBigSum(arr) {
    return arr.reduce((acc, current) => {
        return acc + current;
    }, 0);
}

function main() {
    const n = parseInt(readLine());
    const arr = readLine().split(' ').map(Number);
    const result = aVeryBigSum(arr);
    console.log(result);
}
