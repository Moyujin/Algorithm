const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" "));

function solution(num, input) {
    let [N, M] = num;
    N = +N;
    M = +M;

    let cnt = Array.from(Array(N), () => new Array(M).fill(0));
    let totalCnt = 0;
    let maxCnt = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            for (let k = 0; k < input[i][j].length; k++) {
                if (input[i][j][k] === "9") {
                    cnt[i][j]++;
                    totalCnt++;
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        let count = 0;
        for (let j = 0; j < M; j++) {
            if (cnt[i][j] > 0) count += cnt[i][j];
        }

        if (maxCnt < count) maxCnt = count;
    }

    for (let j = 0; j < M; j++) {
        let count2 = 0;
        for (let i = 0; i < N; i++) {
            if (cnt[i][j] > 0) count2 += cnt[i][j];
        }

        if (maxCnt < count2) maxCnt = count2;
    }

    console.log(totalCnt - maxCnt);
}

solution(num, input);
