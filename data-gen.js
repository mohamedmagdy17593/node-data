const fs = require('fs')

const s1 = 10000
const s2 = 10000

const data = Array.from({length: s1}, (_, i) =>
  Array.from({length: s2}, (_, j) => `${j}`),
)

console.log(data.length);
console.log(data[0].length);

fs.writeFileSync('./data.json', JSON.stringify(data))
