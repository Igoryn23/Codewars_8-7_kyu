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

// digits(123);

// Difference Of Squares  
function diffOfSquares(n) {
    let sum = 0;
    let sq = 0;
    while (n) {
        sum += n;
        sq += n ** 2;
        n--;
    }
    console.log(sum, sq);
    return sum ** 2 - sq;

}
// diffOfSquares(10);

//  How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    let avg, sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    avg = sum / classPoints.length;
    return (avg < yourPoints) ? true : false;
}

// betterThanAverage([2, 4, 5, 6], 5);


// Find the missing element between two arrays
function findMissing(arr1, arr2) {
    let res = 0;
    arr1.sort(function(a, b) {
        return a - b;
    })
    arr2.sort(function(a, b) {
        return a - b;
    })
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            res = arr1[i];
            break;
        }
    }
    return res;

}
// findMissing(([1, 2, 3], [1, 3]), 2);

// Counting Array Elements
function count(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let a = array[i]
        if (obj[a] !== undefined) {
            ++obj[a];
        } else {
            obj[a] = 1;
        }
        console.log(obj);
    }
    console.log(obj);
    return obj;
}

count(['a', 'a', 'b', 'b', 'b']);

// Which triangle is that?
// Build a function that will take the length of each side of a triangle and return if it's either an Equilateral, an Isosceles, a Scalene or an invalid triangle.

var typeOfTriangle = function(a, b, c) {
    if (!(a + b > c && a + c > b && b + c > a)) {
        return 'Not a valid triangle';
    }
    if (a === b && a === c && b === c) {
        return 'Equilateral';
    } else if (a === b || a === c || b === c) {
        return 'Isosceles';
    } else {
        return 'Scalene';
    }
}

// Ones and Zeros
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
const binaryArrayToNumber = arr => {
    let str = arr.join('');
    let res = parseInt(str, 2);
    return res;
};