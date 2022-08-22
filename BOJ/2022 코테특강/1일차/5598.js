const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

N = input.length;

function solution(N, data) {
    let res = [data.length];
    data = data[0];

    for (var i = 0, len = data.length; i < len; i++) {
        var idx = data.charCodeAt(i) - 3;

        if (idx < "A".charCodeAt(0)) idx += 26;

        res[i] = String.fromCharCode(idx);
    }
    console.log(res.join(""));
}

solution(N, input);
