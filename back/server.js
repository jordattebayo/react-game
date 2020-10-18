const express = require("express");
const mongoose = require("mongoose");
const testRoute = require("./routes/testRoute.js");
require("dotenv").config();

const app = express();

app.use(express.json());

const uri = process.env.URI;

mongoose.connect(uri, {useNewUrlParser: true})

app.use(testRoute);

//Authentication 
var AuthController = require("./auth/AuthController");
app.use("/api/auth", AuthController);


app.listen(3000, () => { console.log('Sever is running...')})