process.stdin.resume();
process.stdin.setEncoding('utf-8');

const inputLines: string[] = ['aba', '10'];
let currentLine = 0;

function readLine(): string {
  return inputLines[currentLine++];
}

function repeatedString(s: string, n: number): number {
  const occurrencesInInput = (s.match(/a/g) || []).length;
  const timesToRepeatString = Math.floor(n / s.length);
  const numberOfCharactersTotal = s.length * timesToRepeatString;
  const additionalCharacters = n - numberOfCharactersTotal;
  let occurrencesOfA = occurrencesInInput * timesToRepeatString;

  if (additionalCharacters > 0) {
    for (let i = 0; i < additionalCharacters; i++) {
      if (s[i] === 'a') occurrencesOfA += 1;
    }
  }

  return occurrencesOfA;
}

export default function main() {
  const s: string = readLine();
  const n: number = parseInt(readLine().trim(), 10);

  const result: number = repeatedString(s, n);

  console.log('result', result);
}

main();
