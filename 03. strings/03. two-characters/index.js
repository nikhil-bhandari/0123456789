function getDistinctCharacters(string) {
    return string
        .split("")
        .reduce((acc, current) => {
            if (acc.indexOf(current) === -1) {
                acc.push(current);
            }
            return acc;
        }, []);
}

function getDistinctCharacterSet(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            result.push([arr[i], arr[j]])
        }
    }
    return result;
}

function hasConsecutiveCharacters(str, arr) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            return true;
        }
    }
}

function getTestSubject(target, characterSet) {
    return target
        .split("")
        .reduce((acc, char) => {
            if (characterSet.indexOf(char) > -1) {
                acc.push(char)
            }
            return acc;
        }, [])
        .join("")
}

function getLargestString(arr) {
    return arr.sort((a, b) => b.length - a.length)[0]
}

function getS(targetString) {
    const distinctCharacters = getDistinctCharacters(targetString);
    const distinctCharacterSet = getDistinctCharacterSet(distinctCharacters);

    const testSubjects = distinctCharacterSet.map((item) => {
        return getTestSubject(targetString, item)
    });

    const validTestSubjects = testSubjects.filter((str, index) => {
        return !hasConsecutiveCharacters(str, distinctCharacterSet[index]);
    });

    return getLargestString(validTestSubjects);

}

const a = getS("muqqzbcjmyknwlmlcfqjujabwtekovkwsfjrwmswqfurtpahkdyqdttizqbkrsmfpxchbjrbvcunogcvragjxivasdykamtkinxpgasmwz");

console.log(a ? a.length : 0);
