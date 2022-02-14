// function fib(n) {
//   if (n < 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(4));

//n  to 1
// function Nto1(n) {
//   console.log(n + " ");
//   if (n == 1) return;
//   Nto1(n - 1);
// }
// Nto1(10);

//1 to n

// function oneToN(n) {
//   if (n == 0) return;
//   oneToN(n - 1);
//   console.log(n);
// }
// oneToN(10);

// function Both(n) {
//   if (n == 0) return;
//   console.log(n);
//   Both(n - 1);
//   console.log(n);
// }
// Both(10);

// function fic(n) {
//   if (n < 2) return 1;
//   return n * fic(n - 1);
// }
// console.log(fic(5));
// 5 * 4 * 3 * 2 * 1

// function sumofDigs(n) {
//   if (n <= 0) return 0;
//   let rem = n % 10;
//   return rem + sumofDigs(Math.floor(n / 10));
// }
// console.log(sumofDigs(1342));

// let sum = "";
// function reverse(n) {
//   if (n <= 0) return 0;
//   let rem = n % 10;
//   sum += rem;
//   // console.log(rem + " ");
//   reverse(Math.floor(n / 10));
//   return sum;
// }
// console.log(reverse(1234));

let tot = 0;
function noOfZeros(n) {
  if (n <= 0) return 0;
  if (n % 10 === 0) tot++;
  noOfZeros(Math.floor(n / 10));
  return tot;
}
cl(noOfZeros(20300000));

// cl(Math.floor(Math.log10(1234) + 1));

function cl(params) {
  console.log(params);
}
