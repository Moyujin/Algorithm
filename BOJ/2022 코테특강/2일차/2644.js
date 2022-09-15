const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let stdin = fs.readFileSync(filePath).toString().trim().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map((item) => +item);
})();

const DFS = (graph, isVisited, start, end) => {
    const stack = [];
    stack.push(start);
    isVisited[start] = 1;

    while (stack.length) {
        let node = stack.pop();

        if (node === end) return isVisited[node] - 1;

        for (let next of graph[node]) {
            if (isVisited[next] !== 0) continue;
            stack.push(next);
            isVisited[next] = isVisited[node] + 1;
        }
    }
    return -1;
};

const solution = (stdin) => {
    let N = input()[0];
    let [start, end] = input();
    let M = input()[0];

    const graph = Array.from(Array(N + 1), () => new Array());
    const isVisited = Array.from({ length: N + 1 }, () => 0);

    for (let i = 0; i < M; i++) {
        let [X, Y] = input();

        graph[X].push(Y);
        graph[Y].push(X);
    }

    let count = DFS(graph, isVisited, start, end);

    console.log(count);
};

solution(stdin);
