function birthdayCakeCandles(arr) {
    let count = 0;
    const max = arr[arr.length - 1];
    for (
        let i = arr.index - 1;
        max === arr[i];
        i--
    ) {
        count++;
    }

    return count;

}

function main() {
    const n = readLine();

    const arr = readLine()
        .split(' ')
        .map(Number)
        .sort();

    const result = birthdayCakeCandles(arr);
    console.log(result);
}
