const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = n.split(" ").map((item) => +item);
const arr = input.map((item) => item.split(" ").map((item) => +item));
let num = Array(N + 1).fill(0);

const union = (x, y) => {
    x = find(x);
    y = find(y);

    if (x !== y) num[x] = y;
};

const find = (x) => {
    if (num[x] === x) return x;
    return (num[x] = find(num[x]));
};

const solution = (N, M) => {
    for (let i = 1; i <= N; i++) {
        num[i] = i;
    }
    console.log(num);
    for (let i = 0; i < M; i++) {
        let [type, x, y] = arr[i];
        if (type === 0) {
            if (x === y) continue;
            union(x, y);
        } else {
            if (x === y) {
                console.log("YES");
                continue;
            }
            if (num[x] === num[y]) console.log("YES");
            else console.log("NO");
        }
    }
};
solution(N, M);
console.log(num);
