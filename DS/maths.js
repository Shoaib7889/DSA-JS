//      if a Num is prime, its multiples will not be primes

function sqrt(x) {
  let root = 0.0;
  let left = 1;
  let right = x;
  let ans = null;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (mid * mid === x) return mid;
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      ans = mid;
      left = mid + 1;
    }
  }
  return ans;

  // let inc = 0.1;
  // for (let i = 0; i < 2; i++) {
  //   while (root * root <= n) {
  //     root += inc;
  //   }
  //   root -= inc;
  //   inc /= 10;
  // }
}
cl(sqrt(5));

// function newtonRapson(n) {
//   let x = n;
//   let root;
//   while (true) {
//     root = 0.5 * (x + n / x);
//     if (Math.abs(root - x) < 1) {
//       break;
//     }
//     x = root;
//   }
//   return root;
// }
// cl(newtonRapson(36));

// function GCD(a, b) {
//   if (a == 0) return b;
//   return GCD(b % a, a);
// }
// cl(GCD(4, 9));

// function isOdd(n) {
//   return (n & 1) === 1;
// }
// cl(isOdd(12));

// function uniq(arr) {
//   let no = 0;
//   for (let i of arr) {
//     no = no ^ i;
//     cl(no);
//   }
//   return no;
// }
// cl(uniq([1, 2, 1, 3, 2]));
// var reverseBits = function (n) {
//   let binary = n.toString(2);
//   console.log(binary + " ");
//   const appendingZeros = 32 - binary.length;
//   for (let index = 0; index < appendingZeros; index++) {
//     // cl('inside');
//     binary = "0" + binary;
//   }
//   console.log(binary);
//   // cl(parseInt(binary.split('').reverse('').join(''), 2));
//   // return parseInt(binary.split("").reverse("").join(""), 2);
// };
// reverseBits(00000010100101000001111010011100);

// function nMagicNum(n) {
//   let ans = 0;
//   let base = 5;
//   while (n > 0) {
//     let last = n & 1;
//     n = n >> 1;
//     ans += last * base;
//     base = base * 5;
//   }
//   console.log(ans);
// }
// nMagicNum(5);

// function noOfDigits(n, b) {
//   let count = 0;
//   while (n > 0) {
//     n = n >> 1;
//     count++;
//   }
//   cl(count);
// }
// noOfDigits(10, 2);

// cl(a);
function cl(n) {
  console.log(n);
}
