console.log("Maximum and minimum element");
let arr = [10, 9, 6, 8, 7, 4, 3, 2, 1, 11, 15, 10, -1, 100];
let i = 0;

//length of an array
i = arr.length;
//console.log(i);
//0c0onsole.log(arr);

let min = arr[0];
let max = arr[0];
for (let x = 0; x < i; x++) {
  if (arr[x] < min) {
    min = arr[x];
  }

  if (arr[x] > max) {
    max = arr[x];
  }
}
console.log(min);
console.log(max);
