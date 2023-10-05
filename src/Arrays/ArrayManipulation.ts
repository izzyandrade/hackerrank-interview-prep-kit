/**
 * The `arrayManipulation` function takes in an integer `n` and a 2D array `queries` as parameters.
 * It manipulates an array of length `n` based on the queries and returns the maximum value in the manipulated array.
 *
 * @param n - An integer representing the length of the array.
 * @param queries - A 2D array of integers representing the queries. Each query is an array of three integers: `a`, `b`, and `k`.
 * @returns The maximum value in the manipulated array.
 */
function arrayManipulation(n: number, queries: number[][]): number {
  const arr: number[] = new Array(n + 1).fill(0);

  queries.forEach(([a, b, k]) => {
    arr[a - 1] += k;
    arr[b] -= k;
  });

  let current = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    current += arr[i];
    if (current > max) max = current;
  }
  return max;
}

export default function main() {
  const n = 10;

  const queries = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ];

  const result = arrayManipulation(n, queries);

  console.log(result);
}

main();
