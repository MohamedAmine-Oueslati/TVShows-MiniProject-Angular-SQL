const express = require('express');
const app = express();
const fetch = require("node-fetch");
const mysql = require('mysql');

const db = require('./Database-SQL')

const PORT = process.env.PORT || 4000;
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require('body-parser');
// const path = require('path');

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// authentication
var Users = require("./routes/Users")
app.use("/users", Users)

//update profile
var Update = require("./routes/Update")
app.use("/", Update)



// fetch API
var searchShow = async (query) => {
  var url = `http://api.tvmaze.com/search/shows?q=${query}`
  var response = await fetch(url)
  var data = await response.json()
  return data
}

app.post("/searchshows", (req, res) => {
  var query = req.body
  searchShow(query.query)
    .then((data) => {
      res.json(data)
    })
})

// app.get("/fetchshows", (req, res) => {
//   var query = 'the walking dead'
//   searchShow(query)
//     .then((data) => {
//       res.json(data)
//     })
// })


app.listen(PORT, () => {
  console.log('App is listetning on PORT', PORT);
});