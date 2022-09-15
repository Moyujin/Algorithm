const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [str, bomb] = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(str, bomb) {
    const stack = [];
    const strLen = str.length;
    const bombLen = bomb.length;
    let check = false;

    for (let i = 0; i < strLen; i++) {
        check = false;

        if (str[i] === bomb[bombLen - 1]) {
            for (let j = 1; j < bombLen; j++) {
                if (stack[stack.length - j] !== bomb[bombLen - j - 1]) {
                    check = true;
                    break;
                }
            }

            if (check) {
                stack.push(str[i]);
            } else {
                for (let k = 0; k < bombLen - 1; k++) stack.pop();
            }
        } else {
            stack.push(str[i]);
        }
    }

    if (stack.length === 0) console.log("FRULA");
    else console.log(stack.join(""));
}

solution(str, bomb);
