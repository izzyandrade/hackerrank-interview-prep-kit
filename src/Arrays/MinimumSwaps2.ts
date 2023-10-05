const inputArray = [7, 1, 3, 2, 4, 5, 6];

// this fuction will run through the array and swap the chain of numbers until the current value in the iteration is in its target index
function swapChain(arr: number[], index: number) {
  let swapCount = 0;
  const cpyArr = arr;
  let current = arr[index];
  let target = arr[current - 1];
  while (current !== target) {
    // swap current position with target position and increase swap count
    cpyArr[index] = target;
    cpyArr[current - 1] = current;

    swapCount += 1;

    // update current and target positions
    current = target;
    target = arr[current - 1];
  }
  return swapCount;
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr: number[]) {
  let totalSwaps = 0;
  arr.forEach((element, index) => {
    totalSwaps += swapChain(arr, index);
  });
  return totalSwaps;
}

export default function main() {
  const res = minimumSwaps(inputArray);

  console.log(res);
}

main();
