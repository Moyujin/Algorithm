const arr = [1, 7, 9, 10, 12];
const res = [];
const isVisited = [];

let n = 5;
let r = 3;

function permutation() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;

            for (let k = 0; k < n; k++) {
                if (i === k || j === k) continue;
                console.log(arr[i], arr[j], arr[k]);
            }
        }
    }
}

function recurPermu(n, r, idx) {
    if (r === idx) {
        console.log(res.join(" "));
        return;
    }

    for (let i = 0; i < n; i++) {
        if (isVisited[i] === 1) continue;
        res[idx] = arr[i];
        isVisited[i] = 1;
        recurPermu(n, r, idx + 1);
        isVisited[i] = 0;
    }
}

recurPermu(n, r, 0);
console.log(res);
