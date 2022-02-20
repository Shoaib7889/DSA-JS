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

// let tot = 0;
// function noOfZeros(n) {
//   if (n <= 0) return 0;
//   if (n % 10 === 0) tot++;
//   noOfZeros(Math.floor(n / 10));
//   return tot;
// }
// cl(noOfZeros(20300000));

//we can implement the selection sort and buble sort using this method
//coz these both sorts has O(n^2 ), and this recursion do have so, is like nested two FOR loops 
let triangle = (r, c) => {
  if (r == 0) return;
  
  if (c < r) {
    cl('*')
    triangle(r, c + 1)
  } else {
cl('')
    triangle(r-1,0)
  }
}
triangle(4, 0)

let selectionSort = (arr,r, c,max) => {
  if (r == 0) return;
  
  if (c < r) {
    if (arr[c] > arr[max]) {
      selectionSort(arr,r , c + 1,c)
    } else {
      selectionSort(arr, r, c + 1, max)
    }
    
  } else {
    let temp = arr[max];
    arr[max] = arr[r - 1];
    arr[r - 1] = temp;
    selectionSort(arr, r - 1, 0, 0);
  }
}
let arr = [4,3,2,1];
selectionSort(arr, arr.length, 0, 0)
cl(arr)


/**      Subset and subsequence    */

let subsets = (p,up,arr) => {
  if (!up) {
    cl(p); arr.push(p)
    return;
  }
  let ch = up.charAt(0);
  
  subsets(p + ch, up.substr(1),arr);
  subsets(p , up.substr(1),arr);
}
let res =[]
// subsets('', 'abc', res); 

let subSeqAscii = (p,up) => {
  if (!up) {
    cl(p);
    return;
  }
  let ch = up.charAt(0);
   
  subSeqAscii(p + ch, up.substr(1));
  subSeqAscii(p , up.substr(1));
  subSeqAscii(p + ch.charCodeAt(0), up.substr(1));
}
// subSeqAscii('', 'abc');

// [1,2,3] - this qn of digits in array to subsets like [1],[2],[3]... is left

let permutations = (p,up) => {
  if (!up) {
    cl(p);
    return;
  }
  let ch = up.charAt(0);
   
  for (let i = 0; i <= p.length; i++) {
    let fst = p.substr(0,i)
    let snd = p.substr(i, p.length);
    permutations(fst+ch+snd,up.substr(1));
  }
}
permutations('', 'abc');

// leetcode17Dial
let leetcode17Dial = (p,fup,sup) => {
  if (!fup && !sup) {
    if (p.length <=2) cl(p);
    return;
  }
  let ch = fup.charAt(0);
  let ch2 = sup.charAt(0);
   
  leetcode17Dial(p + ch+ch2, fup.substr(1),sup.substr(1));
  leetcode17Dial(p, fup.substr(1),sup.substr(1));
}
cl('--------')
leetcode17Dial('', 'abc','def');
/**
 * 
 * cl
 * 
 */

function cl(params) {
  console.log(params);
}
