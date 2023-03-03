const inputLines: string[] = [
  '-9 -9 -9 1 1 1',
  '0 -9 0 4 3 2',
  '-9 -9 -9 1 2 3',
  '0 0 8 6 6 0',
  '0 0 0 -2 0 0',
  '0 0 1 2 4 0',
];
let currentLine = 0;

function readLine(): string {
  return inputLines[currentLine++];
}

function sumIndividualHourglass(hourglass: number[][]): number {
  let sum = 0;
  for (let i = 0; i < hourglass.length; i++) {
    for (let j = 0; j < hourglass[i].length; j++) {
      if (i !== 1 || (i === 1 && j === 1)) {
        sum += hourglass[i][j];
      }
    }
  }
  return sum;
}

function hourglassSum(arr: number[][]): number {
  const hourGlassesSums: number[] = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let hourglass = arr.slice(i, i + 3);
      hourglass = hourglass.map((line) => {
        return line.slice(j, j + 3);
      });
      hourGlassesSums.push(sumIndividualHourglass(hourglass));
    }
  }

  return Math.max(...hourGlassesSums);
}

export default function main() {
  const arr: number[][] = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  const result: number = hourglassSum(arr);
  console.log('Highest sum: ', result);
}

main();
