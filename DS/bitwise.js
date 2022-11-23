// tips
// let last = n & 1; // it gives last no in binary
// n >> 1; this deceases no by half

// XOR
// a XOR 1 = a' |  a XOR 0 = a | a XOR a = 0

// Left shift
// a << 1 = 2a  |  a<<n = a * 2^n

// Right shift
// a >> n = a / 2^n

// n && 1 == 1 => odd else even
function findEvenOdd() {
  let n = 23;
  if (n && 1 == 1) console.log("odd");
  else console.log("even");
}
findEvenOdd();

function findUniqueNo() {
  let unique = 0;
  for (let x of arr) {
    unique = unique ^ x;
  }
  console.log("unique ", unique);
  return unique;
}
let arr = [2, 3, 3, 1, 4, 6, 4];
findUniqueNo(arr);

function leftShift(n) {
  let res = 1 << n;
  let out = parseInt(res.toString("2"));
  console.log("left shift", out);
  return out;
}
leftShift(4);

function rightShift(n) {
  let res = n >> 1;
  console.log("right shift", res.toString("2"));
}
rightShift(5);

function findIthElement(no, i) {
  let mask = leftShift(i - 1);
  let re = no && mask;
  console.log("ith no ", re);
}
let no = 10110110,
  i = 5;
findIthElement(no, i);

function setIthBit(no, i) {
  let mask = leftShift(i - 1);
  console.log("setIthBit", no || mask);
  return no || mask;
}

function resetIthBit(no, i) {
  let mask = leftShift(i - 1);
  // complement of that
  console.log("resetIthBit", no && !mask);
  return no || !mask;
}

// Negative of a no
// MSB tells about +ve or -ve and LSB tells even odd

function magicNo() {
  let n = 3;
  let ans = 0;
  let base = 5;

  // iterate till the total bbinary numbers in the n
  while (n > 0) {
    let last = n & 1; // it gives last no in binary
    console.log("this n", n);
    n = n >> 1; // this deceases no one times
    ans = ans + last * base;
    base = base * 5;
  }
  console.log("ans ", ans);

  let myn = 5;
  while (myn > 0) {
    console.log(myn);
    myn = myn >> 1;
  }
}
magicNo();

function NoOfDigits(n, b) {
  let ans = parseInt(Math.log(n) / Math.log(b) + 1);
  console.log("base ", ans);
}
NoOfDigits(4, 2);

function pascalTriangle(n) {
  let ans = 1 << (n - 1);
  console.log("pascalTriangle", ans);
  return ans;
}
pascalTriangle(3);

function powerOfTwo(n) {
  let ans = n & (n - 1 == 0);
  console.log("pascalTriangle", ans);
  return ans;
}
powerOfTwo(2);

function powerOfa(power) {
  let base = 2;
  let ans = 1;
  while (power > 0) {
    if (power && 1) {
      ans = ans * base;
    }
    base *= base;
    power = power >> 1;
  }
  console.log("powerOfa ", ans);
}
powerOfa(4);

// Keep & the no with n-1, till get 0
function noOfSetBits() {
  let no = 9;
  let count = 0;
  while (no > 0) {
    // no = no - (no && -no);
    let minused = no - 1;
    no = no && minused;
    console.log("no ", no);
    count++;
  }
  console.log("noOfSetBits ", count++);
}
noOfSetBits();

// let my_no = 5;

function XORfromZeroToA(a) {
  if (a % 4 == 0) return a;
  else if (a % 4 == 1) return 1;
  else if (a % 4 == 2) return a + 1;
  else if (a % 4 == 3) return 0;
}
XORfromZeroToA(a);

function rangeXOR(a, b) {
  let out = XORfromZeroToA(a - 1) ^ XORfromZeroToA(b);
  console.log("rangeXOR ", out);
}
rangeXOR(2, 5);

function flipImage(img) {
  let out = [];
  for (let i = 0; i < img.length; i++) {
    let temp = [];
    for (let j = img[i].length - 1; j >= 0; j--) {
      temp.push(img[i][j] ^ 1);
    }
    out.push(temp);
  }
  console.log("flipImage ", out);
}
flipImage([
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
]);
