const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

const s1 = 10000
const s2 = 10000

const data = Array.from({length: s1}, (_, i) =>
  Array.from({length: s2}, (_, j) => j),
)

console.log(data.length)
console.log(data[0].length)

app.get('/', (req, res) => {
  res.json(data)
})

app.listen(3000, () => console.log('server started'))
