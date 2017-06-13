function main() {
    const numberOfLines = parseInt(readLine());
    const matrix = [];

    for (let index = 0; index < numberOfLines; index++) {
        matrix[index] = readLine().split(' ');
        matrix[index] = matrix[index].map(Number);
    }

    const sumOfPrimaryDiagonal = simpleArraySum(getPrimaryDiagonal(matrix));
    const sumOfSecondaryDiagonal = simpleArraySum(getSecondaryDiagonal(matrix));

    console.log(Math.abs(sumOfPrimaryDiagonal - sumOfSecondaryDiagonal));

}

function simpleArraySum(arr) {
    return arr.reduce((acc, current) => {
        return acc + current;
    }, 0);
}

function getPrimaryDiagonal(matrix) {
    let arr = [];

    matrix.forEach((item, index) => {
        arr.push(matrix[index][index])
    });

    return arr;
}
function getSecondaryDiagonal(matrix) {
    let arr = [];

    matrix.forEach((item, index) => {
        arr.push(matrix[index][item.length - index - 1]);
    });

    return arr;

}