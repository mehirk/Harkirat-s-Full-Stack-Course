const express = require('express')
const app = express()


app.get('/', (req, res) =>{
  res.send('Hello World')
})

function sum(a, b) {
  return a+b;
}

const sum = (a, b) => {
  a = a + 1
  return a + b
}


app.listen(3000)