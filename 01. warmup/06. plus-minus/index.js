function main() {
    const numberOfLines = parseInt(readLine());
    let arr = readLine()
        .split(' ')
        .map(Number);

    const result = arr.reduce((acc, current) => {
        if (current === 0) {
            acc.zero++;
        } else if (current > 0) {
            acc.positive++;

        } else if (current < 0) {
            acc.negative++;

        }
        return acc;
    }, {
        positive: 0,
        negative: 0,
        zero: 0
    });

    console.log((result.positive / numberOfLines).toFixed(6));
    console.log((result.negative / numberOfLines).toFixed(6));
    console.log((result.zero / numberOfLines).toFixed(6));

}
