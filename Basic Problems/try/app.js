//  how to access an element beyond its scope

/*let a = 12;
let b = 0;
let x;
const mult = () => {
  let B = a * 2;
  b = a * 4;
  x = document.getElementById("ap").textContent;
  x = "rahul";
  console.log(x);
  console.log(`the  inner value is ${b}`);
  console.log(`the  inner value is ${B}`);
  //return b;
};

mult();

b = b / 4;
console.log(x);

console.log(`the outer value is ${b}`);
//console.log(`the outer value is ${B}`);
*/
/*function myFunction() {
  var str = document.getElementById("id1");
  if (str.value == "") {
    str.focus();
    return;
  }
  var a = "ASCII Code is == > ";
  document.getElementById("demo").innerHTML = a + str.value.charCodeAt(0);
}*/

/*  pattern coading   */
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = n; j > n - i; j--) {
    string += "2 ";
  }
  string += "\n";
}
console.log(string);
