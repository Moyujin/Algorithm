const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, M, ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

N = +N[0];

const graph = Array.from(Array(N + 1), () => new Array());
for (let [a, b] of input) {
    graph[a].push(b);
    graph[b].push(a);
}

const BFS = (v) => {
    const queue = [];
    const isVisited = [];
    let cnt = 0;

    queue.push(v);
    isVisited[v] = true;

    while (queue.length) {
        const node = queue.shift();

        for (let next of graph[node]) {
            if (isVisited[next]) continue;

            queue.push(next);
            isVisited[next] = true;
            cnt++;
        }
    }

    console.log(cnt);
};

BFS(1);
