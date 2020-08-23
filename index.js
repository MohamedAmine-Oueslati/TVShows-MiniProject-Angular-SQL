const express = require('express');
const app = express();
const fetch = require("node-fetch");
const db = require('./Database-SQL')

const PORT = process.env.PORT || 4000;
// const bodyParser = require('body-parser');
// const path = require('path');



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
function searchShow(query) {
  var url = `http://api.tvmaze.com/search/shows?q=${query}`
  fetch(url)
    .then(result => result.json())
    .then((data) => {
      console.log(data)
    })
}


app.listen(PORT, () => {
  console.log('App is listetning on PORT', PORT);
});