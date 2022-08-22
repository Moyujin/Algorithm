const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(N, K) {
    let arrN = Array(N)
        .fill()
        .map((x, i) => i + 1);

    let arr = [];

    let cnt = 0;
    while (arrN.length) {
        cnt = (cnt + K - 1) % arrN.length;
        arr.push(arrN.splice(cnt, 1));
    }

    console.log("<" + arr.join(", ") + ">");
}

solution(+N, +K);
