console.log("Sorting the Array");
let arr = [10, 9, 6, 8, 7, 4, 3, 2, 1, 11, 15, 10, -1, 100];
let i = 0;
let j = 0;

//length of an array
i = arr.length;
console.log(`length of array ${i}`);
//0c0onsole.log(arr);
let min = arr[j];
let max = arr[i - 1];

for (let y = 0; y <= i; y++, j++, i--) {
  for (let x = 0; x < i; x++) {
    if (arr[x] < min) {
      min = arr[x];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(`Bhag ${max}`);
  console.log(`Bhag ${min}`);
}
