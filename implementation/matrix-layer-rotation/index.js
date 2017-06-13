function processData(input) {
    const lines = input.split("\n");
    const data = lines.shift().split(" ");
    const M = parseInt(data.shift());
    const N = parseInt(data.shift());
    const numberOfRotations = parseInt(data.shift());

    const matrix = matrixFromLines(lines);
    const newMatrix = rotate(matrix, numberOfRotations, M, N)
    printMatrix(newMatrix);

}

function createMatrix(m, n) {
    const matrix = [];
    times(m, () => {
        matrix.push([]);
    });
    return matrix;
}

function arrayFromLayer(layer, matrix) {
    const arr = [];
    let x = layer.bottomLeft.x;
    let y = layer.bottomLeft.y;
    let end = {
        x: x,
        y: y
    };

    do {

        arr.push(matrix[x][y]);

        if (canMoveRight(x, y, 1, layer)) {
            y++;
        } else if (canMoveTop(x, y, 1, layer)) {
            x--;
        } else if (canMoveLeft(x, y, 1, layer)) {
            y--;
        } else if (canMoveBottom(x, y, 1, layer)) {
            x++;
        }

    } while (x !== end.x || y !== end.y);

    return arr;

}

function saveLayerToMatrix(layer, matrix, items) {
    let x = layer.bottomLeft.x;
    let y = layer.bottomLeft.y;
    let end = {
        x: x,
        y: y
    };


    do {
        matrix[x][y] = items.shift();

        if (canMoveRight(x, y, 1, layer)) {
            y++;
        } else if (canMoveTop(x, y, 1, layer)) {
            x--;
        } else if (canMoveLeft(x, y, 1, layer)) {
            y--;
        } else if (canMoveBottom(x, y, 1, layer)) {
            x++;
        }

    } while (x !== end.x || y !== end.y);

}

function rotate(matrix, steps, m, n) {
    const newMatrix = createMatrix(m, n);
    const layers = getLayerBounds(m, n);

    layers.forEach((layer) => {

        const layerItems = arrayFromLayer(layer, matrix);
        const a = Math.floor(steps % layerItems.length);

        times(a, function () {
            layerItems.unshift(layerItems.pop());
        });

        saveLayerToMatrix(layer, newMatrix, layerItems);
    });

    return newMatrix;
}

function copyMatrix(from, to) {
    to.target[to.x][to.y] = from.target[from.x][from.y];
}

function canMoveRight(x, y, steps, layer) {
    return y + steps <= layer.bottomRight.y && x === layer.bottomRight.x;
}

function canMoveTop(x, y, steps, layer) {
    return x - steps >= layer.topRight.x && y === layer.topRight.y;
}

function canMoveLeft(x, y, steps, layer) {
    return y - steps >= layer.topLeft.y && x === layer.topLeft.x;
}

function canMoveBottom(x, y, steps, layer) {
    return x + steps <= layer.bottomLeft.x && y === layer.bottomLeft.y;
}


function getLayerBounds(m, n) {
    const layerBounds = [];

    times(Math.floor(Math.min(m,n) / 2), (rank) => {
        layerBounds.push(getBounds(rank, m, n));
    });

    return layerBounds;
}

function getBounds(rank, m, n) {
    return {
        topLeft: {
            x: rank,
            y: rank
        },
        bottomLeft: {
            x: m - rank - 1,
            y: rank
        },
        bottomRight: {
            x: m - rank - 1,
            y: n - rank - 1
        },
        topRight: {
            x: rank,
            y: n - rank - 1
        }
    }
}

function matrixFromLines(lines) {
    let matrix = [];
    lines.forEach((line) => {
        matrix.push(line.split(" ").map(Number));
    });
    return matrix;
}

function times(n, cb) {
    for (let i = 0; i < n; i++) {
        cb(i);
    }
}

function printMatrix(matrix) {
    matrix.forEach((row) => {
        console.log(row.join(" "));
    })
}


processData(input);
