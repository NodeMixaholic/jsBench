# jsBench
Tiny JavaScript benchmark tool

## Example to benchmark: Create array and median
```
function createAndMedian() {
    let array = [];
    for (var i = 0; i < 40000; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    var len = array.length;
    var mid = Math.floor(len / 2);
    if (len % 2 === 0) {
        return (array[mid] + array[mid - 1]) / 2;
    } else {
        return array[mid];
    }
}
let cam = await jsBench(createAndMedian);
console.log(cam)
```

## Example to benchmark: Create an array and to find a random value via for loop

```
function createAndFind() {
    let array = [];
    for (var i = 0; i < 40000; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    var len = array.length;
    //choose a number between 0 and the length of the array
    var random = Math.floor(Math.random() * len);
    //get the value of random
    var toFind = array[random];
    //for loop to find the value
    for (var i = 0; i < len; i++) {
        if (array[i] === toFind) {
            return i;
        }
    }
}

let caf = await jsBench(createAndFind);
console.log(caf)
```
