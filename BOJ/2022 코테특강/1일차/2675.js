const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

N = input[0];
data = input.slice(1);

function solution(N, data) {
    for (let i = 0; i < N; i++) {
        let arr = data[i].split(" ");

        let res = [...arr[1]].map((item) => item.repeat(arr[0]));
        console.log(res.join(""));
    }
}

solution(N, data);
