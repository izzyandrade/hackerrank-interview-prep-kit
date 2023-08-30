const inputLines: string[] = [
  '2',
  '8',
  '5 1 2 3 7 8 6 4',
  '8',
  '1 2 5 3 7 8 6 4',
];
let currentLine = 0;

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q: number[]): void {
  let bribeResult = 0;
  const newQueue = [...q];

  for (let index = q.length - 1; index >= 0; index--) {
    if (newQueue[index] !== index + 1) {
      if (newQueue[index - 1] === index + 1) {
        bribeResult += 1;
        newQueue[index - 1] = newQueue[index];
        newQueue[index] = newQueue[index - 1];
      } else if (newQueue[index - 2] === index + 1) {
        bribeResult += 2;
        newQueue[index - 2] = newQueue[index - 1];
        newQueue[index - 1] = newQueue[index];
        newQueue[index] = newQueue[index - 2];
      } else {
        console.log('Too chaotic');
        return;
      }
    }
  }

  console.log(bribeResult);
}

export default function main() {
  const t: number = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n: number = parseInt(readLine().trim(), 10);

    const q: number[] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((qTemp) => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}

main();
