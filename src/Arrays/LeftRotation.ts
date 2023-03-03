const inputLines: string[] = ['5 4', '1 2 3 4 5'];
let currentLine = 0;

function readLine(): string {
  return inputLines[currentLine++];
}

function rotLeft(a: number[], d: number): number[] {
  const arrayToRotate = a;
  for (let i = 0; i < d; i++) {
    const element = arrayToRotate?.shift();
    if (element) arrayToRotate.push(element);
  }
  return arrayToRotate;
}

export default function main() {
  const firstMultipleInput: string[] = readLine()
    .replace(/\s+$/g, '')
    .split(' ');

  const d: number = parseInt(firstMultipleInput[1], 10);

  const a: number[] = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  const result: number[] = rotLeft(a, d);

  console.log('rotated Array: ', result);
}

main();
