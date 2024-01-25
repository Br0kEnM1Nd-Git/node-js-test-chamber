//node calc.js sum 1 2 3
const [operator, ...args] = process.argv.slice(2);
const numbers = args.map((el) => Number(el));
console.log(operator, numbers);

function calculate(operation, data) {
  switch (operation) {
    case "sum":
      return data.reduce((acc, el) => acc + el);
    case "sub":
      return data.reduce((acc, el) => acc - el);
    case "mult":
      return data.reduce((acc, el) => acc * el);
    case "div":
      return data.reduce((acc, el) => acc / el);
    default:
      return "Unknown operation type";
  }
}

console.log(calculate(operator, numbers));
