const { count } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let stdin = fs.readFileSync(filePath).toString().trim().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map((item) => +item);
})();

const solution = () => {
    const [N, C] = input();
    const arr = input();
    const map = new Map();
    const res = [];
    for (let i = 0; i < N; i++) {
        let data = arr[i];
        if (map.has(data)) {
            let [count, idx] = map.get(data);
            count++;
            map.set(data, [count, idx]);
        } else map.set(data, [1, i]);
    }

    const arrMap = [...map].sort((a, b) => {
        if (a[1][0] === b[1][0]) return a[1][1] - b[1][1];
        else return b[1][0] - a[1][0];
    });

    for (let [key, value] of arrMap) {
        for (let i = 0, cnt = value[0]; i < cnt; i++) {
            res.push(key);
        }
    }

    console.log(res.join(" "));
};
solution();
