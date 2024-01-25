const fs = require("fs/promises");
const path = require("path");
const readline = require("readline");
const { program } = require("commander");
require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const num = Math.ceil(Math.random() * 10);
let count = 0;

rl.on("line", (arg) => {
  count++;
  const temp = num > arg ? num - arg : arg - num;

  if (Number(arg) === num) {
    console.log(
      "You won!".america,
      `\nUsed ${count} attemp${count > 1 ? "ts" : "t"}.`.green
    );
    process.exit(3);
  }

  console.log(
    "Not right!".red,
    `\nYou close to win on ${temp} steps.\n`.yellow
  );
});
