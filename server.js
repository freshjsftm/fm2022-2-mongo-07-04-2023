const http = require("http");
const express = require("express");
const yup = require("yup");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

app.get('/', async(req, res, next)=>{})
app.post('/', async(req, res, next)=>{})

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("server started at port: " + port);
});
