const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = num.split(" ").map((item) => +item);
const arr = input.split(" ").map((item) => +item);
let res = 0;

const solution = (idx, sum) => {
    if (idx === N) {
        if (sum === M) res++;
        return;
    }

    solution(idx + 1, sum);
    solution(idx + 1, sum + arr[idx]);
};

solution(0, 0);

if (M === 0) res--;

console.log(res);
