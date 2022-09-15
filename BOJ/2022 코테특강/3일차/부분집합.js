const arr = [-1, 3, -9, 6, 7, -6, 1, 5, 4, -2];
const select = new Array(10);

function combination(n, idx) {
    if (n === idx) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            if (select[i] === 1) console.log(arr[i] + " ");
        }

        if (sum === 0) {
            for (let i = 0; i < n; i++) {
                if (select[i] === 1) console.log(arr[i] + " ");
            }
        }
        return;
    }
    select[idx] = 0;
    combination(n, idx + 1);
    select[idx] = 1;
    combination(n, idx + 1);
}

combination(10, 0);
