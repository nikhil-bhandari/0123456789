function main() {
    const arr = readLine()
        .split(' ')
        .map(Number)
        .sort();

    console.log(
        simpleArraySum(arr.slice(0, 4)),
        simpleArraySum(arr.slice(Math.max(arr.length - 4, 1)))
    )

}


function simpleArraySum(arr) {
    return arr.reduce((acc, current) => {
        return acc + current;
    }, 0);
}