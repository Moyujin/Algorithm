const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const T = +input[idx++];
const data = input.slice(1);

function solution(N, data) {
    const arr = [26];
    let idx = 0,
        cnt = 0;

    for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
            if (data[i][j] !== ".") arr[idx++] = [i, j];
        }
    }

    for (var i = 0; i < idx; i++) {
        for (var j = i + 1; j < idx; j++) {
            for (k = j + 1; k < idx; k++) {
                if (
                    (arr[j][1] - arr[i][1]) * (arr[k][0] - arr[i][0]) ===
                    (arr[k][1] - arr[i][1]) * (arr[j][0] - arr[i][0])
                )
                    cnt++;
            }
        }
    }
    console.log(cnt);
}

solution(T, data);
