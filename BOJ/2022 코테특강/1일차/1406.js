const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [data, N, ...input] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");
N = +N;

function solution(data, N, input) {
    let stack = data.split("");
    const stack2 = [];

    for (var i = 0; i < N; i++) {
        if (input[i] === "L" && stack.length - 1 >= 0) {
            stack2.push(stack.pop());
        } else if (input[i] === "D" && stack2.length - 1 >= 0) {
            stack.push(stack2.pop());
        } else if (input[i] === "B") {
            stack.pop();
        } else if (input[i][0] === "P") {
            stack.push(input[i][2]);
        }
    }

    // for (var i = 0; i < stack2.length; i++) {
    //     console.log(i)
    //     stack.push(stack2.pop());
    // }

    while (stack2.length) {
        stack.push(stack2.pop());
    }

    console.log(stack2.join(""));
}

solution(data, N, input);
