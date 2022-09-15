const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, K, ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");
let [V, E] = num.split(" ").map((item) => +item);
const arr = input.map((item) => item.split(" ").map((item) => +item));

let graph = Array(V + 1)
    .fill(0)
    .map(() => Array());

arr.forEach((data) => {
    let [start, end, cost] = data;
    graph[start].push({
        vertex: end,
        cost: cost,
    });
});

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    isEmpty = () => this.queue.length === 0;
    getLeftChildIndex = (index) => index * 2 + 1;
    getRightChildIndex = (index) => index * 2 + 2;

    front = () => {
        if (this.queue.length === 0) {
            return Error("데이터가 들어있지 않습니다.");
        }
        return this.queue[0];
    };

    rear = () => {
        if (this.queue.length === 0) {
            return Error("데이터가 들어있지 않습니다.");
        }
        return this.queue[this.queue.length - 1];
    };

    print = () => {
        let data = "";
        this.queue.map((item) => (data += item + " "));
        console.log(data);
    };

    enqueue(element) {
        this.queue.push(element);
        this.upHeap();
    }

    upHeap() {
        let index = this.queue.length - 1;
        const lastNode = this.queue[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (lastNode.cost < this.queue[parentIndex].cost) {
                this.queue[index] = this.queue[parentIndex];
                index = parentIndex;
            } else break;
        }
        this.queue[index] = lastNode;
    }

    dequeue() {
        const rootNode = this.queue[0];

        if (this.queue.length === 0) return undefined;
        else if (this.queue.length === 1) {
            this.queue = [];
        } else {
            this.queue[0] = this.queue.pop();
            this.downHeap();
        }
        return rootNode;
    }

    downHeap() {
        let index = 0;
        let len = this.queue.length;
        const rootNode = this.queue[index];

        while (this.getLeftChildIndex(index) < len) {
            const leftIdx = this.getLeftChildIndex(index);
            const rightIdx = this.getRightChildIndex(index);

            const smallIdx =
                rightIdx < len &&
                this.queue[rightIdx].cost < this.queue[leftIdx].cost
                    ? rightIdx
                    : leftIdx;

            if (this.queue[smallIdx].cost < rootNode.cost) {
                this.queue[index] = this.queue[smallIdx];
                index = smallIdx;
            } else break;
        }

        this.queue[index] = rootNode;
    }
}

const solution = (graph) => {
    let distance = new Array(V + 1).fill(Infinity);
    distance[0] = -1;
    distance[K] = 0;

    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue({
        vertex: K,
        cost: 0,
    });

    while (priorityQueue.queue.length) {
        const node = priorityQueue.dequeue();
        let { vertex, cost } = node;

        if (graph[vertex] === undefined) continue;
        if (distance[vertex] < cost) continue;
        for (let i = 0; i < graph[vertex].length; i++) {
            let next = graph[vertex][i];
            let nNode = next.vertex;
            let nCost = next.cost;

            if (cost + nCost < distance[nNode]) {
                distance[nNode] = cost + nCost;
                priorityQueue.enqueue({
                    vertex: nNode,
                    cost: distance[nNode],
                });
            }
        }
    }
    return distance;
};

let distance = solution(graph);
const res = [];

for (let i = 1; i <= V; i++) {
    if (distance[i] === Infinity) res.push("INF");
    else res.push(distance[i]);
}
console.log(res.join("\n"));
