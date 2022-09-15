const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let stdin = fs.readFileSync(filePath).toString().trim().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map((item) => +item);
})();

const BFS = (N, graph, start) => {
    const isVisited = Array(N + 1).fill(false);
    const queue = [];
    queue.push(start);
    isVisited[start] = true;
    let count = 0;

    while (queue.length) {
        const node = queue.shift();

        for (let i = 0; i < graph[node].length; i++) {
            const next = graph[node][i];
            if (isVisited[next]) continue;
            queue.push(next);
            count++;
            isVisited[next] = true;
        }
    }

    return count;
};

const solution = () => {
    let [N, M] = input();
    const graph = Array.from(Array(N + 1), () => new Array());
    const cnt = Array(N + 1).fill(0);

    for (let i = 0; i < M; i++) {
        let [a, b] = input();
        graph[b].push(a);
    }

    for (let i = 1; i <= N; i++) {
        cnt[i] = BFS(N, graph, i);
    }

    const max = Math.max(...cnt);
    const res = [];
    cnt.forEach((curr, idx) => (curr === max ? res.push(idx) : ""));

    console.log(res.join(" "));
};

solution();
