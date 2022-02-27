const express = require('express')
const app = express()
const port = 3000;

let products = require('../products.json')

app.get('/product/:id', (req, res) => {
  let id = req.params.id;
  let product = products.filter((p) => p.id == id )[0]
  res.send(product);
})

app.get('/products', (req, res) => {

  res.send(products);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})