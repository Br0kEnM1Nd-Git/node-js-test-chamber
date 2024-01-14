const CalcOOP = require("./CalcOOP");
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((el) => Number(el));
const result = CalcOOP.calculate(operator, numbers);
