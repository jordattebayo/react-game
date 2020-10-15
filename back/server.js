const express = require("express");
const mongoose = require("mongoose");
const testRoute = require("./routes/testRoute.js");
//const MongoClient = require('mongodb').MongoClient;
require("dotenv").config();

const app = express();
app.use(express.json());

const uri = process.env.URI;

mongoose.connect(uri, {useNewUrlParser: true})

/* const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
}); */

app.use(testRoute);

app.listen(3000, () => { console.timeLog('Sever is running...')})