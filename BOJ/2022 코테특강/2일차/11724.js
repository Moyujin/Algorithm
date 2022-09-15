const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

const [N, M] = num;

const graph = Array.from(Array(N + 1), () => new Array());
const isVisited = Array.from({ length: N + 1 });
const stack = [];

for (let [a, b] of input) {
    graph[a].push(b);
    graph[b].push(a);
}

const DFS = (v) => {
    if (isVisited[v]) return;

    isVisited[v] = true;

    for (let next of graph[v]) {
        if (isVisited[next]) continue;
        DFS(next);
    }
};

const BFS = (v) => {
    const queue = [];

    queue.push(v);
    isVisited[v] = true;

    while (queue.length) {
        let node = queue.shift();

        for (let next of graph[node]) {
            if (isVisited[next]) continue;

            queue.push(next);
            isVisited[next] = true;
        }
    }
};

const solution = () => {
    let cnt = 0;
    // for (let i = 1; i <= N; i++) {
    //     if (isVisited[i]) continue;
    //     DFS(i);
    //     cnt++;
    // }

    for (let i = 1; i <= N; i++) {
        if (isVisited[i]) continue;
        BFS(i);
        cnt++;
    }

    console.log(cnt);
};

solution();
