const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

N = +N;
const arr = input.map((item) => item.split(""));

function solution(N, arr) {
    let rowCnt = 0,
        colCnt = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N - 1; j++) {
            if (arr[i][j] === "." && arr[i][j] === arr[i][j + 1]) {
                rowCnt++;
                for (let k = j + 1; k < N; k++, j++) {
                    if (arr[i][k] === "X") break;
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N - 1; j++) {
            if (arr[j][i] === "." && arr[j][i] === arr[j + 1][i]) {
                colCnt++;
                for (let k = j + 1; k < N; k++, j++) {
                    if (arr[k][i] === "X") break;
                }
            }
        }
    }

    console.log(rowCnt, colCnt);
}

solution(N, arr);
