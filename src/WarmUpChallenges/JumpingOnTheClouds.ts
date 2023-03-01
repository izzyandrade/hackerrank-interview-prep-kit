const inputLines: string[] = ['0 0 1 0 0 1 0'];
let currentLine = 0;

function readLine(): string {
  return inputLines[currentLine++];
}

function performJump(nextClouds: number[]): number[] {
  if (nextClouds.length >= 3 && nextClouds[2] !== 1) {
    console.log(nextClouds.slice(2));
    return nextClouds.slice(2);
  }
  if (nextClouds.length >= 2 && nextClouds[1] !== 1) {
    console.log(nextClouds.slice(1));
    return nextClouds.slice(1);
  }
  return [];
}

function jumpingOnClouds(c: number[]): number {
  console.log(c);
  let endReached = false;
  let jumps = 0;
  let nextClouds: number[] = c;
  while (!endReached) {
    // runs function in loop while end of array is not reached
    nextClouds = performJump(nextClouds); // calls function that performs next jump and returns new array starting from the new position
    if (nextClouds.length === 0) return -1; // if this ever happens, it means the jump is impossible
    jumps += 1;
    console.log('jumps', jumps);
    if (nextClouds.length === 1) endReached = true; // if the array contains only one element, it means it's the end
  }
  return jumps;
}

export default function main() {
  const c: number[] = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((cTemp) => parseInt(cTemp, 10));

  const result: number = jumpingOnClouds(c);

  if (result === -1) console.log('this is impossible');

  console.log('result', result);
}

main();
