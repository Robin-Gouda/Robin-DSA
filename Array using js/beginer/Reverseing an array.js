console.log("Reverseing an array");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let i = 0;

//length of an array but his method wont work if some value in array represent falsy
// like "0", "null", "NaN", "Undefined"
while (arr[i]) {
  i++;
}
console.log(`length of the array is ${i}`);
console.log(arr);

let last = i - 1;

for (let x = 0; x < last; x++, last--) {
  let temp = arr[last];
  arr[last] = arr[x];
  arr[x] = temp;
  //console.log(`x = ${x}`);
  //console.log(`last = ${last}`);
}

console.log(arr);
