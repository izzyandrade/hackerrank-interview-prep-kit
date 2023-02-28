let inputString = '';
let inputLines: string[] = [];
let currentLine = 0;

process.stdin.on('data', (inputStdin: string): void => {
  inputString += inputStdin;
});

process.stdin.on('end', (): void => {
  inputLines = inputString.split('\n');
  inputString = '';
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
// steps = [DDUUUUDD]
function countingValleys(steps: number, path: string): number {
  console.log('path', path);
  return 0;
}

export default function main() {
  const steps: number = parseInt(readLine().trim(), 10);

  const path: string = readLine();

  const result: number = countingValleys(steps, path);

  console.log('result', result);
}

main();
