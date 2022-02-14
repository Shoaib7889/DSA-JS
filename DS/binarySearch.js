function BST(arr, no, strt, end) {
  const mid = Math.floor((strt + end) / 2);

  if (end < strt) return false;
  if (arr[mid] === no) return true;

  if (no < arr[mid]) {
    return BST(arr, no, strt, mid - 1);
  } else {
    return BST(arr, no, mid + 1, end);
  }
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(BST(arr, 4, 0, arr.length - 1));
