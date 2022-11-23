class CyclicSort {
  sort(arr) {
    let i = 0;
    while (i < arr.length) {
      let correct = arr[i];
      if (arr[i] < arr.length && arr[i] !== arr[correct]) {
        this.swap(arr, i, correct);
      } else {
        i++;
      }
    }
    console.log(arr);
    return arr;
  }
  findDuplicate(arr) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] !== i + 1) {
        let correct = arr[i] - 1;
        if (arr[i] !== arr[correct]) {
          this.swap(arr, i, correct);
        } else {
          return arr[i];
        }
      } else {
        i++;
      }
    }
    return -1;
  }
  findMismatch(arr) {
    let i = 0;
    while (i < arr.length) {
      let correct = arr[i] - 1;
      if (arr[i] !== arr[correct]) {
        swap(arr, i, correct);
      } else {
        i++;
      }
    }

    for (let index = 0; index < arr.length; index++) {
      if (i + 1 !== arr[i]) {
        return [arr[i], i + 1];
      }
    }
  }
  swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  }
}

let cyclicSort = new CyclicSort();
let arrunsorted = [3, 1, 1];
// let arr = cyclicSort.sort(arrunsorted);
let ans = cyclicSort.findDuplicate(arrunsorted);
console.log("ans ", ans);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
