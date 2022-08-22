const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const data = input.slice(1);

function solution(N, datas) {
    let rowCnt = 0,
        colCnt = 0;

    for (var i = 0; i < N; i++) {
        for (var j = 0; j < N - 1; j++) {
            if (data[i][j] === "." && data[i][j] === data[i][j + 1]) {
                rowCnt++;
                for (var k = j + 1; k < N; k++, j++) {
                    if (data[i][k] === "X") break;
                }
            }
        }
    }

    for (var y = 0; y < N; y++) {
        for (var x = 0; x < N - 1; x++) {
            if (data[x][y] === "." && data[x][y] === data[x][y + 1]) {
                colCnt++;
                for (var z = x + 1; z < N; z++, x++) {
                    if (data[z][i] === "X") break;
                }
            }
        }
    }

    console.log(rowCnt, colCnt);
}

solution(N, data);
