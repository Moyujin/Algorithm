const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let stdin = fs.readFileSync(filePath).toString().trim().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map((item) => +item);
})();

const BFS = (N, S, arr) => {
    let isVisited = Array.from(Array(N + 1), () => 0);
    let cnt = 1;
    const queue = [];
    queue.push(S);
    isVisited[S] = 1;

    while (queue.length) {
        let node = queue.shift();

        for (let next of [arr[node - 1], -arr[node - 1]]) {
            next = next + node;
            if (isVisited[next] !== 0 || next <= 0 || next > N) continue;
            isVisited[next] = 1;
            queue.push(next);
            cnt++;
        }
    }
    console.log(cnt);
};

const solution = () => {
    const N = input()[0];
    const arr = input();
    const S = input()[0];

    BFS(N, S, arr);
};

solution();
