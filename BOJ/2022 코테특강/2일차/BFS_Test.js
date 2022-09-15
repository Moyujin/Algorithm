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

var graph = Array.from(Array(8), () => new Array());

for (let [a, b] of data) {
    graph[a].push(b);
    graph[b].push(a);
}

console.log(graph);

function BFS(graph, v) {
    const queue = [];
    const isCheck = [];

    queue.push(v);
    isCheck[v] = true;
    console.log("START : " + v);

    while (queue.length) {
        let node = queue.shift();
        for (path of graph[node]) {
            if (!isCheck[path] === true) {
                queue.push(path);
                isCheck[path] = true;
                console.log("next : " + path);
            }
        }
    }
}

BFS(graph, 1);
