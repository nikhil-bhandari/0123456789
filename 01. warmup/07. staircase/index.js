function main() {
    const n = parseInt(readLine());
    for (let i = 0; i < n; i++) {
        console.log(Array(n - i).join(" ") + Array(i + 2).join("#"))
    }
}
