//node calc.js sum 1 2 3
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((el) => Number(el));
console.log(operator, numbers);
