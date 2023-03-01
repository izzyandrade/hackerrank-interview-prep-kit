const inputLines: string[] = ['10', 'DUDDDUUDUU'];
let currentLine = 0;

const SEA_LEVEL = 0;

function readLine(): string {
  return inputLines[currentLine++];
}

function calculateNewPosition(position: number, step: string) {
  let newPosition = 0;
  if (step === 'U') newPosition = position + 1;
  if (step === 'D') newPosition = position - 1;
  console.log(newPosition);
  return newPosition;
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
  let valleys = 0;
  let isInValley = false;
  let position = SEA_LEVEL;
  const pathArray = path.split('');

  pathArray.forEach((step) => {
    position = calculateNewPosition(position, step);
    if (position === -1 && !isInValley) isInValley = true;
    if (position === 0 && isInValley) {
      isInValley = false;
      valleys += 1;
    }
  });

  return valleys;
}

export default function main() {
  const steps: number = parseInt(readLine().trim(), 10);

  const path: string = readLine();

  const result: number = countingValleys(steps, path);

  console.log('result', result);
}

main();
