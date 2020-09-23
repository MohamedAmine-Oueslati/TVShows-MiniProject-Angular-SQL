const sequelize = require('sequelize')
const express = require('express')
const app = express();
const db = require('../Database-SQL');
const router = express.Router();

// module.exports = db.sequelize.define('user',
//     {
//         id: {
//             type: sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         email: {
//             type: sequelize.STRING
//         },
//         usename: {
//             type: sequelize.STRING
//         },
//         password: {
//             type: sequelize.STRING
//         },
//         firstName: {
//             type: sequelize.STRING
//         },
//         lastName: {
//             type: sequelize.STRING
//         },
//         address: {
//             type: sequelize.STRING
//         },
//         city: {
//             type: sequelize.STRING
//         },
//         country: {
//             type: sequelize.STRING
//         },
//         zipCode: {
//             type: sequelize.STRING
//         },
//         aboutMe: {
//             type: sequelize.STRING
//         }
//     }, {
//     timestamps: false
// })

// Create Table
router.get('/createuserstable', (req, res) => {
    let sql = `CREATE TABLE users(id int AUTO_INCREMENT, email VARCHAR(255), username VARCHAR(255),
     password VARCHAR(255), firstName VARCHAR(255), LastName VARCHAR(255),address VARCHAR(255),
     city VARCHAR(255),country VARCHAR(255),zipCode VARCHAR(255),aboutMe VARCHAR(255),
     PRIMARY KEY(id))`;
    db.db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send('Users table created')
    })
})
// Add Post
// app.get('/adduser', (req, res) => {
//     let post = { email: 'amine@gmail.com', username: 'wesamin', password: '123456' };
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

module.exports = router