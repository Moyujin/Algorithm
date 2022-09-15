const data = [
    [1, 2],
    [1, 3],
    [2, 4],
    [2, 5],
    [3, 7],
    [4, 6],
    [5, 6],
    [6, 7],
];
const isVisited = [];

var graph = Array.from(Array(8), () => new Array());

for (let [a, b] of data) {
    graph[a].push(b);
    graph[b].push(a);
}

function DFS(graph, v) {
    const stack = [];
    const isVisited = [];

    stack.push(v);
    console.log("node : " + v);

    while (stack.length) {
        let node = stack.pop();
        if (isVisited[node] !== true) {
            isVisited[node] = true;

            for (let next of graph[node]) {
                if (isVisited[next] !== true) {
                    stack.push(next);
                    console.log("node : " + node);
                }
            }
        }
    }
}

function DFS_recur(graph, v) {
    isVisited[v] = true;

    console.log("start : " + v);
    for (let next of graph[v]) {
        if (isVisited[next] !== true) DFS_recur(graph, next);
    }
}

DFS(graph, 1);

DFS_recur(graph, 1);
