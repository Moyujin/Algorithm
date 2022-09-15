const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input.map((item) => item.split("").map(Number));
const BFS = (y, x) => {
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, -1, 1];
    const queue = [];
    let cnt = 1;
    queue.push([y, x]);
    arr[y][x] = 0;

    while (queue.length) {
        let point = queue.shift();
        let [pointY, pointX] = point;

        for (let i = 0; i < 4; i++) {
            let nY = pointY + dy[i];
            let nX = pointX + dx[i];
            if (nX < 0 || nY < 0 || nX >= N || nY >= N) {
                continue;
            }

            if (arr[nY][nX] === 1) {
                queue.push([nY, nX]);
                arr[nY][nX] = 0;
                cnt++;
            }
        }
    }
    return cnt;
};

const solution = (N, arr) => {
    let res = [];
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
            if (arr[y][x] === 1) {
                res.push(BFS(y, x));
            }
        }
    }
    console.log(res.length);
    res.sort((a, b) => a - b).forEach((item) => console.log(item));
};

solution(N, arr);
