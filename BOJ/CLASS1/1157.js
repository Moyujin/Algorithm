const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync("/dev/stdin").toString().toLowerCase();

let arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    arr[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...arr);
const index = arr.indexOf(max);

let isSame = false;

for (let i = 0; i < 26; i++) {
    if (arr[i] === max && i !== index) {
        isSame = true;
        break;
    }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
