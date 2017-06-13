function simpleArraySum(arr) {
    return arr.reduce((acc, current) => {
        return acc + current;
    }, 0);
}

function main() {
    const n = parseInt(readLine());
    const arr = readLine().split(' ').map(Number);
    const result = simpleArraySum(arr);
    console.log(result);
}
