function cipher(str, k) {
    return str
        .split("")
        .map((char) => {
            if (isAlphabet(char)) {
                return getReplacement(char, k % 26);
            }
            return char;
        })
        .join("")

}

function isAlphabet(char) {
    return "a" <= char && char <= "z" || "A" <= char && char <= "Z"
}

const a = "a".charCodeAt(0);
const z = "z".charCodeAt(0);
const A = "A".charCodeAt(0);
const Z = "Z".charCodeAt(0);

function getReplacement(char, k) {
    const asci = char.charCodeAt(0);
    let code;
    if (asci >= a && asci <= z) {
        if (asci + k > z) {
            code = (a + (asci + k - z - 1));
        } else {
            code = (asci + k);
        }
    } else if (asci >= A && asci <= Z) {
        if (asci + k > Z) {
            code = (A + +(asci + k - Z - 1));
        } else {
            code = asci + k;
        }
    }
    return String.fromCharCode(code)
}


console.log(cipher("abcdefghijklmnopqrstuvwxyz", 2) === "cdefghijklmnopqrstuvwxyzab");
console.log(cipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2) === "CDEFGHIJKLMNOPQRSTUVWXYZAB");
console.log(cipher("!m-rB`-oN!.W`cLAcVbN/CqSoolII!SImji.!w/`Xu`uZa1TWPRq`uRBtok`xPT`lL-zPTc.BSRIhu..-!.!tcl!-U", 62));
console.log("!w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E");
console.log(cipher("", 2));

