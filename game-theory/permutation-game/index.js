function main(arr) {
    const n = arr.filter(() => true);

    n.sort((a, b) => a - b);

    const a = [];


    arr.forEach(function (item, index) {
        if (item !== n[index]) {
            a.push(index);
        } else if (arr[index - 1] === n[index + 1] && item === n[index] && arr[index + 1] === n[index - 1]) {
            console.log("matched");
            a.push(index);
        }

    });


    if (a.length === 2) {
        console.log("yes");
        console.log("swap", a[0] + 1, a[1] + 1);
    } else if (a.length > 1 && isConsecutive(a) && isSorted(a.map((v) => arr[v]).reverse())) {
        console.log("yes");
        console.log("reverse", a[0] + 1, a[a.length - 1] + 1)
    } else {
        console.log("no");
    }
}

function isConsecutive(a) {
    return a.every((item, index) => {
        return index === 0 || item - a[index - 1] === 1;
    })
}
function isSorted(a) {
    return a.every((item, index) => {
        return index === 0 || item > a[index - 1];
    })
}

function processData(input) {
    main(input.split("\n")[1].split(" ").map(Number));
}


