const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M, V] = num.split(" ").map((item) => +item);
const arr = input.map((item) => item.split(" ").map((item) => +item));

let graph = Array.from(Array(N + 1), () => new Array());
const isVisited = [];

for (let [a, b] of arr) {
    graph[a].push(b);
    graph[b].push(a);
}

graph = graph.map((item) => item.sort((a, b) => a - b));

const DFS = (graph, v) => {
    const stack = [];
    const isVisited = [];
    let res = [];
    stack.push(v);

    while (stack.length) {
        let node = stack.pop();

        if (isVisited[node]) continue;

        isVisited[node] = true;
        res.push(node);

        for (let next = graph[node].length - 1; next >= 0; next--) {
            if (isVisited[graph[node][next]]) continue;

            stack.push(graph[node][next]);
        }
    }

    console.log(res.join(" "));
};

let res = [];
const recurDFS = (v) => {
    if (isVisited[v]) return;

    isVisited[v] = true;
    res.push(v);

    for (let next of graph[v]) {
        if (isVisited[next]) continue;
        recurDFS(next);
    }
};

const BFS = (graph, v) => {
    const queue = [];
    const isVisited = [];
    let res = [];

    queue.push(v);
    isVisited[v] = true;
    res.push(v);

    while (queue.length) {
        let node = queue.shift();
        for (let path of graph[node]) {
            if (!isVisited[path] === true) {
                queue.push(path);
                isVisited[path] = true;
                res.push(path);
            }
        }
    }

    console.log(res.join(" "));
};

recurDFS(V);
console.log(res.join(" "));
BFS(graph, V);
