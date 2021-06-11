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

// mergeArrays([1, 2, 3, 4, 5, 6, 7], ['a', 'b', 'c']);

//  explode 

function explode(x) {
    let arr = [];
    let x1 = x[0];
    let x2 = x[1];
    /// проверка для void
    if (typeof x1 == 'string' && typeof x2 == 'string') {
        return 'Void!';
    }
    ///  проверка для 2х int
    if (typeof x1 === 'number' && typeof x2 === 'number') {
        let c = x1 + x2;
        for (let i = 0; i < c; i++) {
            arr.push(x);
        }
        return arr;
    }
    // x1 = string
    if (typeof x1 == 'string') {
        for (let i = 0; i < x2; i++) {
            arr.push(x);
        }
        return arr;
    }
    // x2 = string
    if (typeof x2 == 'string') {
        for (let i = 0; i < x1; i++) {
            arr.push(x);
        }
        return arr;
    }

}

// explode(['t', 3]);

function noBoringZeros(n) {



    let arr = [];
    let a = 0;
    let temp = n.toString().split('');
    console.log(temp);
    for (let i = temp.length - 1; i >= 0; i--) {
        if (temp[i] !== '0') {
            a = i;
            break;
        }
    }
    console.log(a);
    for (let k = 0; k <= a; k++) {
        arr.push(temp[k]);
    }
    console.log(arr);

}

// noBoringZeros(-145000);

// All Star Code Challenge #22
function toTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - hours * 3600) / 60);
    console.log(hours, min);
    return `${hours} hour(s) and ${min} minute(s)`;

}
// toTime(3663);

// Every possible sum of two digits

function digits(num) {
    let arr = [];
    let str = num.toString();
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        for (let k = i + 1; k < str.length; k++) {
            arr.push(+str[i] + +str[k]);
        }
    }
    console.log(arr);
    return arr;
}

digits(123);