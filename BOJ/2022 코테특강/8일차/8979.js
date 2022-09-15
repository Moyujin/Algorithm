const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((item) => +item));

console.log(input);

function solution(num, input) {
    let [N, M] = num;

    const arr = Array.from(Array(N), () => new Array(3));

    input.sort((a, b) => {
        if (a[1] > b[1]) return 1;
        else if (a[1] === b[1]) {
            if (a[2] > b[2]) return 1;
            else if (a[2] === b[2]) {
                if (a[3] > b[3]) return 1;
                else if (a[3] === b[3]) return 0;
                else return -1;
            } else return -1;
        } else return -1;
    });

    // input.sort((a, b) => a - b);
    console.log(input);
}

solution(num, input);
