const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, arr, M] = fs.readFileSync(filePath).toString().trim().split("\n");

N = +N;
M = +M;
arr = arr.split(" ").map((v) => +v);

const solution = (N, arr, M) => {
    arr.sort((a, b) => a - b);

    let low = 0;
    let high = arr.at(-1);
    let ans = Math.max(...arr);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let sum = 0;
        let check = false;
        for (let i = 0; i < arr.length; i++) {
            if (sum > M) break;

            if (arr[i] > mid) sum += mid;
            else sum += arr[i];
        }

        if (sum > M) {
            high = mid - 1;
        } else {
            ans = mid;
            low = mid + 1;
        }
    }

    console.log(ans);
};

solution(N, arr, M);
