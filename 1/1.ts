import fs from "fs";

const file = fs.readFileSync("./input.txt", "utf8");

const rows = file.split("\n");
let listA = [];
let listB = [];

for (let row of rows) {
  const [a,b] = row.split('   ');
  listA.push(a);
  listB.push(b);
}

listA = listA.sort((a,b)=>a-b);
listB = listB.sort((a,b)=>a-b);

let diff = [];

for(let index in listA) {
  diff.push(Math.abs(listB[index]-listA[index]));
}

console.log(diff.reduce((prev, current)=>prev+current, 0));