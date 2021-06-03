function mergeArrays(a, b) {
    let arr = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if (i < a.length) {
            arr.push(a[i]);
        }
        if (i < b.length) {
            arr.push(b[i]);
        }
    }
    console.log(arr);
}

mergeArrays([1, 2, 3, 4, 5, 6, 7], ['a', 'b', 'c']);