function super_reduced_string(str) {
    const c = findConsecutive(str);
    if (c) {
        return super_reduced_string(str.replace(c + c, ""));
    }
    return str || "Empty String"

}

function findConsecutive(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            return s[i];
        }
    }
}

console.log(super_reduced_string("aabcc"));