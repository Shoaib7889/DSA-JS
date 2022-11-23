// function BST(arr, no, strt, end) {
//   const mid = Math.floor((strt + end) / 2);

//   if (strt > end) return false;
//   if (arr[mid] === no) return true;

//   if (no < arr[mid]) {
//     return BST(arr, no, strt, mid - 1);
//   } else {
//     return BST(arr, no, mid + 1, end);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(BST(arr, 4, 0, arr.length - 1));

class InfiniteArray {
  constructor() {
    this.arr = [];
    this.target = 0;
  }
  main(arr, target) {
    this.arr = arr;
    this.target = target;
    return this.ans(arr, target);
  }
  ans(arr, target) {
    let start = 0;
    let end = 1;

    while (target > arr[end]) {
      let temp = end + 1;
      end = end + (end - start + 1) * 2;
      start = temp;
    }

    return this.binarySearch(arr, target, start, end);
  }
  binarySearch(arr, target, start, end) {
    while (start <= end) {
      let mid = Math.floor(start + end / 2);
      if (target < arr[mid]) {
        mid = mid - 1;
      } else if (target > arr[mid]) {
        start = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
  }
}
const infinityObj = new InfiniteArray();
let ans = infinityObj.main([3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170], 10);
console.log("ans ", ans);

class SearchMountain {
  main(arr) {
    return this.peakIndexInMountainArray(arr);
  }
  peakIndexInMountainArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
      let mid = Math.floor(start + (end - start) / 2);
      //if you are in desc order
      if (arr[mid] > arr[mid + 1]) {
        end = mid;
      } else {
        // in the end, start == end and poleting to the largest number because of the 2 checks above
        start = mid + 1;
      }
    }
    return start;
  }
  orderAgnosticBS(arr, target, start, end) {
    // find whether the array is sorted in ascending or descending
    let isAsc = arr[start] < arr[end];

    while (start <= end) {
      // find the middle element
      //            let mid = (start + end) / 2; // might be possible that (start + end) exceeds the range of let in java
      let mid = Math.floor(start + (end - start) / 2);

      if (arr[mid] == target) {
        return mid;
      }

      if (isAsc) {
        if (target < arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else {
        if (target > arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
    return -1;
  }
}

let searchMountain = new SearchMountain();
let arr2 = [3, 5, 7, 9, 10, 90, 100, 80, 20, 4, 1];
console.log("peak ", searchMountain.main(arr2));

class RBS {
  search(nums, target) {
    let pivot = findPivot(nums);

    // if you did not find a pivot, it means the array is not rotated
    if (pivot == -1) {
      // just do normal binary search
      return binarySearch(nums, target, 0, nums.length - 1);
    }

    // if pivot is found, you have found 2 asc sorted arrays
    if (nums[pivot] == target) {
      return pivot;
    }

    if (target >= nums[0]) {
      return binarySearch(nums, target, 0, pivot - 1);
    }

    return binarySearch(nums, target, pivot + 1, nums.length - 1);
  }

  binarySearch(arr, target, start, end) {
    while (start <= end) {
      // find the middle element
      //            let mid = (start + end) / 2; // might be possible that (start + end) exceeds the range of let in java
      let mid = start + (end - start) / 2;

      if (target < arr[mid]) {
        end = mid - 1;
      } else if (target > arr[mid]) {
        start = mid + 1;
      } else {
        // ans found
        return mid;
      }
    }
    return -1;
  }

  // this will not work in duplicate values
  findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = start + (end - start) / 2;
      // 4 cases over here
      if (mid < end && arr[mid] > arr[mid + 1]) {
        return mid;
      }
      if (mid > start && arr[mid] < arr[mid - 1]) {
        return mid - 1;
      }
      if (arr[mid] <= arr[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
}

class SplitArrayLargestSum {
  calculateSum(arr, m) {
    let { start, end } = this.findStartAndEnd(arr);

    while (start < end) {
      let mid = start + (end - start) / 2;
      let sum = 0;
      let pieces = 1;
      for (let x of arr) {
        if (sum + x > mid) {
          // you cant add this no in this subarray , make new
          // new arry will begin with thi no
          sum = num;
          pieces++;
        } else {
          sum += num;
        }
      }

      if (pieces > m) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    return end;
  }
  findStartAndEnd(arr) {
    let start = 0;
    let end = 0;
    for (let i = 0; i < arr.length; i++) {
      start = Math.max(start, arr[i]);
      end = end + arr[i];
    }
    return {
      start,
      end,
    };
  }
}

class RowColMatrix {
  main() {
    let matrix = [
      [10, 20, 30, 40],
      [15, 25, 35, 45],
      [28, 29, 37, 49],
      [33, 34, 38, 50],
    ];

    let res = this.search(matrix, 37);
    console.log(res);
  }
  search(matrix, target) {
    let r = 0;
    // at first take the last element of array
    let c = matrix.length - 1;

    while (r > matrix.length && c >= 0) {
      if (matrix[r][c] == target) {
        return new Array(r, c);
      }
      if (matrix[r][c] < target) {
        r++;
      } else {
        c--;
      }
    }

    return new Array(-1, -1);
  }
}

let rowColMatrix = new RowColMatrix();
rowColMatrix.main();
