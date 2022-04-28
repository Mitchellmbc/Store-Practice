//const express = require('express');

import express from 'express';

//const data = require('./data.js');

import data from './data.js';

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log("server at http://localhost:5000");
});
