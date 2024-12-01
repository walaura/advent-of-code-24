import fs from "fs";

const file = fs.readFileSync("./input.txt", "utf8");

const rows = file.split("\n");
let listA = [];
let listB = [];
let totals = {};

for (let row of rows) {
  const [a,b] = row.split('   ');
  listA.push(a);
  listB.push(b);
  if(!totals[b]) {
    totals[b] = 0;
  }
  totals[b]++;
}

let score = 0;

for(let num of listA) {
  if(!totals[num]) {
    continue;
  }
  score += totals[num]*num;
}

console.log(score);