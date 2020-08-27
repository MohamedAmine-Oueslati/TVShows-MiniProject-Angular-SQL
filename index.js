const express = require('express');
const app = express();
const fetch = require("node-fetch");
const db = require('./Database-SQL')

const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
// const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});




// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.db.query(sql, (err, result) => {
    if (err) {
      throw err
    }
    res.send('Database created')
  })
})

// Create Table
app.get('/createpoststable', (req, res) => {
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
  db.db.query(sql, (err, result) => {
    if (err) {
      throw err
    }
    console.log(result)
    res.send('Posts table created')
  })
})
// Add Post
// app.get('/addpost', (req, res) => {
//     let post = { title: 'amine', body: 'Juve' };
//     let sql = 'INSERT INTO posts SET ?'
//     let query = db.db.query(sql, post, (err, result) => {
//         if (err) {
//             throw err
//         }
//         console.log(result)
//         res.send('Post 1 added')
//     })
// })

// Delete Post
// app.get('/deletepost/:id', (req, res) => {
//     let sql = `DELETE FROM posts WHERE id = ${req.params.id}`
//     let query = db.db.query(sql, (err, result) => {
//         if (err) {
//             throw err
//         }
//         console.log(result)
//         res.send('Post 1 deleted')
//     })
// })


// fetch API
var searchShow = async (query) => {
  var url = `http://api.tvmaze.com/search/shows?q=${query}`
  var response = await fetch(url)
  var data = await response.json()
  return data
}

app.get("/fetchshows", (req, res) => {
  var query = 'the walking dead'
  var arr = searchShow(query)
  console.log(arr)
  res.json(arr)
})

app.post("/searchshows", (req, res) => {
  var query = req.body
  // console.log(query)
  var arr = searchShow(query.query)
  console.log(arr)
  res.json(arr)
})


app.listen(PORT, () => {
  console.log('App is listetning on PORT', PORT);
});