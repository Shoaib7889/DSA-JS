function binarySearch(arr, t, s, e) {
  let m = Math.floor((s + e) / 2);

  if (arr[m] == t) return m;
  // debugger;
  if (arr[s] <= arr[m]) {
    if (t >= arr[s] && t <= arr[m]) {
      return binarySearch(arr, t, s, m - 1);
    } else {
      return binarySearch(arr, t, m + 1, e);
    }
  }

  if (t >= arr[m] && t <= arr[e]) {
    return binarySearch(arr, t, m + 1, e);
  }

  // debugger;
  return binarySearch(arr, t, s, m - 1);
}
let arrr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arrr, 3, 0, arrr.length - 1));

function bubbleSort() {}

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
    cl("*");
    triangle(r, c + 1);
  } else {
    cl("");
    triangle(r - 1, 0);
  }
};
triangle(4, 0);

let selectionSort = (arr, r, c, max) => {
  if (r == 0) return;

  if (c < r) {
    if (arr[c] > arr[max]) {
      selectionSort(arr, r, c + 1, c);
    } else {
      selectionSort(arr, r, c + 1, max);
    }
  } else {
    let temp = arr[max];
    arr[max] = arr[r - 1];
    arr[r - 1] = temp;
    selectionSort(arr, r - 1, 0, 0);
  }
};
let arr = [4, 3, 2, 1];
selectionSort(arr, arr.length, 0, 0);
cl(arr);

/**      Subset and subsequence    */

let subsets = (p, up, arr) => {
  if (!up) {
    cl(p);
    arr.push(p);
    return;
  }
  let ch = up.charAt(0);

  subsets(p + ch, up.substr(1), arr);
  subsets(p, up.substr(1), arr);
};
let res = [];
// subsets('', 'abc', res);

let subSeqAscii = (p, up) => {
  if (!up) {
    cl(p);
    return;
  }
  let ch = up.charAt(0);

  subSeqAscii(p + ch, up.substr(1));
  subSeqAscii(p, up.substr(1));
  subSeqAscii(p + ch.charCodeAt(0), up.substr(1));
};
// subSeqAscii('', 'abc');

// [1,2,3] - this qn of digits in array to subsets like [1],[2],[3]... is left

let permutations = (p, up) => {
  if (!up) {
    cl(p);
    return;
  }
  let ch = up.charAt(0);

  for (let i = 0; i <= p.length; i++) {
    let fst = p.substr(0, i);
    let snd = p.substr(i, p.length);
    permutations(fst + ch + snd, up.substr(1));
  }
};
permutations("", "abc");

// leetcode52nQueens
class leetcode52nQueens {
  constructor(size) {}
  queens(board, row) {
    if (row == board.length) {
      this.display(board);
      cl("");
      return;
    }
    let count = 0;
    for (let col = 0; col < board.length; col++) {
      //if specified position is not on attack risk
      if (this.isSafe(board, row, col)) {
        board[row][col] = true;
        count += this.queens(board, row + 1);
        board[row][col] = false;
      }
    }

    return count;
  }
  isSafe(board, row, col) {
    //check vertical top column
    for (let i = 0; i < row; i++) {
      if (board[i][col]) {
        return false;
      }
    }
    //check left Diag
    let maxLeft = Math.min(row, col);
    for (let i = 1; i < maxLeft; i++) {
      if (board[row - i][col - i]) {
        return false;
      }
    }
    //check right Diag
    let maxRight = Math.min(row, board.length - col - 1);
    for (let i = 1; i < maxRight; i++) {
      if (board[row - i][col + i]) {
        return false;
      }
    }

    return true;
  }
  display(board) {
    for (let i of board) {
      for (const j of i) {
        if (board[i][j]) {
          cl("Q ");
        } else {
          cl("X ");
        }
      }
      cl("");
    }
  }
}
let obj57 = new leetcode52nQueens(4);
let arr57 = new Array(4).fill(new Array(4));
obj57.queens(arr57, 0);

/**
 *
 * cl
 *
 */

function cl(params) {
  console.log(params);
}
