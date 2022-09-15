const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [L, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

L = +L;

function solution(L, input) {
    for (let idx = 0; idx < L; idx++) {
        const stack = [];
        const stack2 = [];

        let arr = input[idx];

        for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === "<") {
                if (!stack2.length) continue;

                stack.push(stack2.pop());
            } else if (arr[i] === ">") {
                if (!stack.length) continue;

                stack2.push(stack.pop());
            } else if (arr[i] === "-") {
                stack2.pop();
            } else {
                stack2.push(arr[i]);
            }
        }

        let res1 = "";

        while (stack.length) {
            if (stack[stack.length - 1] === undefined) break;
            res1 += stack.pop();
        }

        let res = stack2.join("") + res1;

        console.log(res);
    }
}

solution(L, input);
