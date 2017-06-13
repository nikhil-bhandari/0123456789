function isAM(timeString) {
    return timeString.indexOf("AM") > -1
}


function isPM(timeString) {
    return timeString.indexOf("PM") > -1
}

function getHourCorrection(timeStr, hours) {
    if (isPM(timeStr)) {
        return hours === 12 ? 0 : 12;
    } else if (isAM(timeStr)) {
        return hours === 12 ? -12 : 0;
    }
}

function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(0) + n;
}

function timeConversion(timeStr) {
    const arr = timeStr.split(":").map((str) => {
        return parseInt(str)
    });
    arr[0] += getHourCorrection(timeStr, arr[0]);
    return arr.map((num) => {
        return pad(num, 2)
    }).join(":");
}


function main() {
    const str = readLine();
    const result = timeConversion(str);
    console.log(result);
}

console.log(timeConversion("12:00:00PM"));