const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.port || 3000;
const app = express();

app.get('/', (req, res) => {
    res.json();
  })

  

  app.post('/signup', (req, res) => {
    res.json();
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })