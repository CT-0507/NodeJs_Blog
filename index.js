const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
    var a = 1;
  res.send(`Hello World! ${a}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})