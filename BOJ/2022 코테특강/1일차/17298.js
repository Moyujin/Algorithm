const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, input] = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.split(" ").map((item) => +item);

function solution(N, input) {
    const stack = [];
    const arr = [];

    for (let i = input.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
            stack.push(input[i]);
            arr[i] = -1;
        } else {
            while (stack.length > 0 && stack.at(-1) <= input[i]) {
                stack.pop();
            }

            arr[i] = stack.length === 0 ? -1 : stack.at(-1);
            stack.push(input[i]);
        }
    }
    console.log(arr.join(" "));
}

solution(N, input);
