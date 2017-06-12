function solve(playerA, playerB) {
    return [
        [playerA[0], playerB[0]],
        [playerA[1], playerB[1]],
        [playerA[2], playerB[2]],
    ].reduce((acc, current) => {
        if (current[0] > current[1]) {
            acc[0]++;
        } else if (current[1] > current[0]) {
            acc[1]++;
        }
        return acc
    }, [0, 0]);
}

function main() {
    const playerA = readLine().split(' ').map(Number);
    const playerB = readLine().split(' ').map(Number);
    const result = solve(playerA, playerB);
    console.log(result.join(" "));
}
