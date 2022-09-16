const input = [];

let N = 0;
let count = -1;

const rl = require("readline");

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    getLeftChildIndex = (index) => index * 2 + 1;
    getRightChildIndex = (index) => index * 2 + 2;

    front = () => {
        if (this.queue.length === 0) return Error("데어터가 들어있지 않습니다");
        return this.queue[0];
    };

    end = () => {
        if (this.queue.length === 0) return Error("데어터가 들어있지 않습니다");
        return this.queue[this.queue.length - 1];
    };

    print = () => {
        let data = "";
        this.queue.map((item) => (data += item + " "));
        console.log(data);
    };

    enqueue = (element) => {
        if (this.queue.length >= N) {
            if (element <= this.queue[0]) {
                return;
            } else {
                this.dequeue();
            }
        }
        this.queue.push(element);
        this.upHeap();
    };

    upHeap = () => {
        let index = this.queue.length - 1;
        const lastNode = this.queue[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (lastNode < this.queue[parentIndex]) {
                this.queue[index] = this.queue[parentIndex];
                index = parentIndex;
            } else break;
        }

        this.queue[index] = lastNode;
    };

    dequeue = () => {
        const rootNode = this.queue[0];

        if (this.queue.length === 0) return undefined;
        else if (this.queue.length === 1) {
            this.queue = [];
        } else {
            this.queue[0] = this.queue.pop();
            this.downHeap();
        }
        return rootNode;
    };

    downHeap = () => {
        let index = 0;
        let len = this.queue.length;
        const rootNode = this.queue[index];

        while (this.getLeftChildIndex(index) < len) {
            const leftIdx = this.getLeftChildIndex(index);
            const rightIdx = this.getRightChildIndex(index);

            const smallIdx =
                rightIdx < len && this.queue[rightIdx] < this.queue[leftIdx]
                    ? rightIdx
                    : leftIdx;

            if (this.queue[smallIdx] < rootNode) {
                this.queue[index] = this.queue[smallIdx];
                index = smallIdx;
            } else break;
        }

        this.queue[index] = rootNode;
    };
}

// const solution = (N) => {
//     const queue = new PriorityQueue();

//     for (let i = 0; i < N; i++) {
//         const data = input[i].split(" ").map(Number);

//         for (let j = 0; j < N; j++) {
//             queue.enqueue(data[j]);
//         }
//     }

//     console.log(queue.front());
// };

const queue = new PriorityQueue();

rl.createInterface(process.stdin, process.stdout)
    .on("line", function (line) {
        if (count === -1) {
            count = parseInt(line);
            N = count;
            return;
        }

        line.split(" ").forEach((item) => {
            queue.enqueue(Number(item));
        });
        if (count === 0) rl.close();
    })
    .on("close", function () {
        console.log(queue.front());
        process.exit();
    });
