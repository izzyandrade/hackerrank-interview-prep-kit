'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = ["9",
"10 20 20 10 10 30 50 10 20"];
let currentLine: number = 0;

interface SockObject {
    [key: number]: number;
}

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    console.log("here")
    console.log(inputLines[currentLine]);
    return inputLines[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n: number, ar: number[]): number {
    const obj: SockObject = {};
    var pairs: number = 0;
    ar.forEach(item => {
        obj[item as keyof SockObject] = obj[item as keyof SockObject] ? obj[item as keyof SockObject] + 1 : 1;
    });
    Object.values(obj).forEach(value => {
        pairs += Math.floor(value / 2);
    })
    return pairs;
}

function main() {
    console.log("here")
    const n: number = parseInt(readLine().trim(), 10);

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map((arTemp) => parseInt(arTemp, 10));

    const result: number = sockMerchant(n, ar);

    console.log("result", result)
}

main();